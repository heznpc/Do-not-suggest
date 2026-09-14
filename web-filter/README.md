# ChatGPT Web Filter

This companion browser filter hides a final paragraph or list item when it matches common unsolicited closing offers, next-action prompts, or choice questions.

It runs after ChatGPT renders a response. Therefore it can hide text even when the text was added by a client or server layer after the main answer. It only targets the last non-empty paragraph or list item inside an assistant message.

## Install locally in Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose this `web-filter` directory.
5. Reload the ChatGPT tab.

The filter supports `chatgpt.com` and `chat.openai.com`. It does not affect the ChatGPT iOS or Android apps.

## Limits

The filter uses text patterns and DOM structure. A site update may require selector changes. Review hidden text if a legitimate final question disappears.
