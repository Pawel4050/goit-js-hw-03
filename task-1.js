function slugify(title) {
    const titleLower = title.toLowerCase();
    const array = titleLower.split(' ');
    return array.join("-");
}
