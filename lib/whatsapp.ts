const WHATSAPP_PHONE = "972508826629";

export const WHATSAPP_MESSAGES = {
  business: `היי דניאל, הגעתי דרך האתר ואשמח לבדוק התאמה לגבי כתיבת תוכן לעסק שלי 🧡`,
  personal: `היי דניאל, הגעתי דרך האתר ואשמח לשמוע פרטים על כתיבת סיפור אישי 🧡`,
} as const;

/**
 * Direct WhatsApp API link (avoids wa.me redirect that breaks emoji on desktop).
 * Works on mobile and desktop — opens app or WhatsApp Web with pre-filled text.
 */
export function whatsappUrl(text: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}
