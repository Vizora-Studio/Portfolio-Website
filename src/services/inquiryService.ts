/// <reference types="vite/client" />
import { ProjectInquiryPayload } from '../types';

export interface InquirySubmissionResult {
  status: 'delivered' | 'local-brief-prepared' | 'error';
  referenceCode: string;
  formattedBrief: string;
  mailtoHref: string;
  message: string;
}

export function formatProjectBriefText(payload: ProjectInquiryPayload, referenceCode: string): string {
  const lines = [
    `VIZORA PROJECT INQUIRY BRIEF (${referenceCode})`,
    `================================================`,
    `Full Name: ${payload.fullName.trim()}`,
    `Email Address: ${payload.email.trim()}`,
    `Business / Brand Name: ${payload.businessName?.trim() || 'None provided'}`,
    `Profession / Business Type: ${payload.profession}`,
    `Website Type: ${payload.websiteType}`,
    `Preferred Design Style: ${payload.designStyle}`,
    `Project Goals: ${payload.projectGoals.trim()}`,
    `Existing Website URL: ${payload.existingWebsiteUrl.trim() || 'None provided'}`,
    `Budget Range: ${payload.budgetRange || 'Request a Quote / Not specified'}`,
    ``,
    `Additional Details:`,
    `${payload.projectDetails.trim()}`,
  ];
  return lines.join('\n');
}

export async function submitProjectInquiry(
  payload: ProjectInquiryPayload
): Promise<InquirySubmissionResult> {
  const referenceCode = `VZ-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const formattedBrief = formatProjectBriefText(payload, referenceCode);

  const subject = encodeURIComponent(
    `Vizora Website Inquiry — ${payload.profession} (${payload.websiteType}) [${referenceCode}]`
  );
  const body = encodeURIComponent(formattedBrief);
  const configuredRecipient = (import.meta.env.VITE_INQUIRY_EMAIL as string | undefined) || '';
  const mailtoHref = `mailto:${configuredRecipient}?subject=${subject}&body=${body}`;

  const endpoint = (import.meta.env.VITE_INQUIRY_ENDPOINT as string | undefined)?.trim();

  // Simulate a brief processing step for tactile UI feedback
  await new Promise((resolve) => setTimeout(resolve, 450));

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          referenceCode,
          submittedAt: new Date().toISOString(),
          ...payload,
        }),
      });

      if (!response.ok) {
        return {
          status: 'error',
          referenceCode,
          formattedBrief,
          mailtoHref,
          message: `The configured inquiry endpoint returned status ${response.status}. Your project brief is preserved below so you can copy it or open it in your email client.`,
        };
      }

      return {
        status: 'delivered',
        referenceCode,
        formattedBrief,
        mailtoHref,
        message:
          'Your project inquiry has been transmitted to the configured Vizora intake endpoint.',
      };
    } catch {
      return {
        status: 'error',
        referenceCode,
        formattedBrief,
        mailtoHref,
        message:
          'Unable to reach the configured inquiry server. Your structured project brief has been preserved below so you do not lose your input.',
      };
    }
  }

  return {
    status: 'local-brief-prepared',
    referenceCode,
    formattedBrief,
    mailtoHref,
    message:
      'Your project brief has been validated and prepared locally. Because no external form backend (VITE_INQUIRY_ENDPOINT) is configured in this environment yet, this inquiry has not been sent to a remote server—you can copy the structured brief below or open it directly in your email client.',
  };
}
