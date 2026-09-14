(() => {
  const marker = "data-do-not-suggest-hidden";
  const candidateSelectors = [
    '[data-message-author-role="assistant"]',
    "article",
  ];

  const solicitation = /(?:Would you like me to|Want me to|If you(?:'d| would) like,? I can|I can also|Let me know if|Should I|Shall I|원하시면|원한다면|필요하면|도와드릴까요|해드릴까요|할까요|어느 쪽이 더|무엇부터 할까요)/i;

  function hideTrailingSolicitation(message) {
    if (message.getAttribute(marker)) return;
    const blocks = [...message.querySelectorAll("p, li")]
      .filter((node) => node.textContent.trim());
    const last = blocks.at(-1);
    if (!last || !solicitation.test(last.textContent)) return;

    last.setAttribute(marker, "true");
    last.style.display = "none";
  }

  function scan(root = document) {
    for (const selector of candidateSelectors) {
      root.querySelectorAll(selector).forEach(hideTrailingSolicitation);
    }
  }

  scan();
  new MutationObserver(() => scan()).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
