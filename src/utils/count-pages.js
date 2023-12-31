// GitHub doesn't send total amount of results but it has link to
// last in header which has the last page number.
export const countPages = (headers) => {
    try {
        const header = headers.get('Link')
        const lastLink = header.split(',').find((h) => h.includes('last'))
        const pageCount = lastLink.match(/&page=\d*/gm)[0]
        const totalPages = parseInt(pageCount.match(/\d*/gm).find((m) => !!m))
        return totalPages
    } catch {
        return 1
    }
}
