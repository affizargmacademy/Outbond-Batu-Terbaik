document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.querySelector('#toc-list');
    const tocHeader = document.querySelector('.toc-title');
    const articleContent = document.querySelector('.article-content');

    if (tocContainer && articleContent) {
        const headings = articleContent.querySelectorAll('h2, h3');

        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;

            const li = document.createElement('li');
            li.style.marginLeft = heading.tagName === 'H3' ? '20px' : '0';
            li.style.listStyle = 'none';
            li.style.marginBottom = '8px';

            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = heading.textContent;
            a.style.color = 'var(--primary)';
            a.style.fontSize = '0.95rem';

            li.appendChild(a);
            tocContainer.appendChild(li);
        });

        // Toggle TOC
        tocHeader.addEventListener('click', () => {
            const isHidden = tocContainer.style.display === 'none';
            tocContainer.style.display = isHidden ? 'block' : 'none';
            tocHeader.querySelector('.toggle-icon').textContent = isHidden ? '[-]' : '[+]';
        });
    }

    // Share buttons functionality
    const url = window.location.href;
    const title = document.title;

    window.shareToWA = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
    };

    window.shareToFB = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    window.shareToTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
    };
});
