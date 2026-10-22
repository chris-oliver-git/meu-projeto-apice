type EzChatApi = { open?: () => void; close?: () => void; set?: (key: string, value: unknown) => void };

function api(): EzChatApi | undefined {
  return (window as Window & { ezchat?: EzChatApi }).ezchat;
}

export function isSchedulingChatOpen(): boolean {
  const host = document.querySelector('ez-webchat');
  if (host) return host.hasAttribute('data-open') && !host.hasAttribute('hidden');
  const frame = document.querySelector<HTMLIFrameElement>('#EZchatWidget iframe[title="mainFrame"]');
  return Boolean(frame && frame.getAttribute('width') !== '0');
}

export async function openSchedulingChat(): Promise<boolean> {
  for (let attempt = 0; attempt < 12; attempt += 1) {
    if (api()?.open && document.querySelector('ez-webchat, #EZchatWidget')) {
      api()!.open!();
      window.dispatchEvent(new Event('apice:ezchat-opened'));
      return true;
    }
    const legacyButton = document.querySelector<HTMLButtonElement>('#EZchatWidget button[data-testid="bubbleBtn"]');
    if (legacyButton) {
      if (!isSchedulingChatOpen()) legacyButton.click();
      window.dispatchEvent(new Event('apice:ezchat-opened'));
      return true;
    }
    await new Promise(resolve => window.setTimeout(resolve, 250));
  }
  return false;
}

export function closeSchedulingChat(): void {
  if (api()?.close) api()!.close!();
  else if (isSchedulingChatOpen()) document.querySelector<HTMLButtonElement>('#EZchatWidget button[data-testid="bubbleBtn"]')?.click();
  window.dispatchEvent(new Event('apice:ezchat-closed'));
}

// Preserve the provider logo and all service settings; fill its circular launcher.
export function configureSchedulingChatIcon(): void {
  if (document.querySelector('ez-webchat')) api()?.set?.('iconFullSize', true);
}
