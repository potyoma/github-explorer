export const takeArray = (total, current, take = 5) => {
    if (total <= take) return Array.from({ length: total }, (_, i) => i)

    const offset = Math.floor(take / 2)
    const start =
        total - offset <= current
            ? total - take
            : current < offset
            ? 0
            : current - offset
            
    return Array.from({ length: take }, (_, i) => i + start)
}
