import { Pokemon } from '../interfaces/Pokemon.interface';

async function getAll(generation: number): Promise<Pokemon[]> {
  const res = await fetch(`https://api-pokemon-fr.vercel.app/api/v1/gen/${generation}`);

  if (!res.ok) {
    throw new Error('Failed to fetch pokemon list');
  }

  return res.json();
}

async function getById(id: number): Promise<Pokemon> {
  const res = await fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch pokemon details');
  }

  return res.json();
}

export default { getAll, getById };
