async function getAll() {
    const res = await fetch('https://api-pokemon-fr.vercel.app/api/v1/gen/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getById(id: number) {
    const res = await fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`)

    if (!res.ok) {
        throw new Error('Cannot fetch pokemon details')
    }

    return res.json();
}


export default { getAll, getById };