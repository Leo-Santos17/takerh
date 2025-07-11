function extractTag(content, tagName)
{
    const regex = new RegExp(`<${tagName}>[\\s\\S]*?</${tagName}>`, 'i');
    const match = content.match(regex);
    if (match) {
        // Extract content between tags and clean up
        return match[0]
        .replace(`<${tagName}>`, '')
        .replace(`</${tagName}>`, '')
        .trim();
    }
    return '';
}

module.exports = extractTag