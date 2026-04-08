// Common disposable/temporary email domains
export const disposableDomains = new Set([
  '10minutemail.com', '10minutemail.net', '10minutemail.org',
  'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamail.biz',
  'guerrillamail.de', 'guerrillamail.info',
  'mailinator.com', 'mailinator.net', 'mailinator.org',
  'temp-mail.org', 'tempmail.com', 'tempmail.net',
  'throwam.com', 'throwaway.email',
  'yopmail.com', 'yopmail.fr', 'yopmail.pp.ua',
  'sharklasers.com', 'guerrillamailblock.com', 'grr.la', 'guerrillamail.info',
  'spam4.me', 'trashmail.at', 'trashmail.com', 'trashmail.io',
  'trashmail.me', 'trashmail.net', 'trashmail.org', 'trashmail.xyz',
  'dispostable.com', 'discard.email',
  'mailnull.com', 'maildrop.cc', 'mailnesia.com',
  'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org',
  'fakeinbox.com', 'fakeinbox.net',
  'mytemp.email', 'tmpmail.net', 'tmpmail.org',
  'tempr.email', 'discard.email',
  'spamherr.com', 'nwldx.com', 'wegwerfemail.de',
  'emailondeck.com', 'tempemail.net',
  'minutemailbox.com', 'dropmail.me',
  'mohmal.com', 'getairmail.com',
  'filzmail.com', 'spam.la',
  'bccto.me', 'chacuo.net',
  'dispostable.com', 'klzlk.com',
  'esiix.com', 'spamex.com',
  'meltmail.com', 'incognitomail.com',
  'no-spam.ws', 'spamfree24.org',
  'mail-temporaire.fr', 'ybb.ne.jp',
  'cuvox.de', 'dayrep.com',
  'einrot.com', 'fleckens.hu',
  'gustr.com', 'jourrapide.com',
  'rhyta.com', 'superrito.com',
  'teleworm.us', 'armyspy.com',
  'cuvox.de', 'dayrep.com',
  'einrot.com', 'fleckens.hu',
  'throwam.com', 'getmails.eu',
  'harakirimail.com', 'spamthisplease.com',
  'temporaryemail.net', 'temporaryemail.us',
  'tempinbox.co.uk', 'tempinbox.com',
  'spammotel.com', 'spaml.com',
  'mailexpire.com', 'spamevader.com',
  'nospam.ze.tc', 'spamfree.eu',
  'deadaddress.com', 'spamgap.com',
  'mailzilla.org', 'spamherelots.com',
  'binkmail.com', 'bob.email',
  'emlhub.com', 'throwam.com',
  'fakemail.net', 'jetable.fr.nf',
  'jetable.net', 'jetable.org',
  'notsharingmy.info', 'nowhere.org',
  'spam.su', 'spamfree24.de',
  'spamfree24.eu', 'spamfree24.info',
  'spamfree24.net', 'spamfree24.org',
  'nwldx.com', 'objectmail.com',
  'obobbo.com', 'oneoffemail.com',
  'onewaymail.com', 'online.ms',
  'oopi.org', 'opayq.com',
]);

export function isDisposableEmail(email: string): boolean {
  const parts = email.toLowerCase().split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  return disposableDomains.has(domain);
}

export function getDomainInfo(email: string): {
  domain: string;
  isDisposable: boolean;
  tld: string;
} {
  const parts = email.toLowerCase().split('@');
  const domain = parts[1] || '';
  const tldParts = domain.split('.');
  const tld = tldParts[tldParts.length - 1] || '';
  return {
    domain,
    isDisposable: disposableDomains.has(domain),
    tld,
  };
}
