export const getDeckId = async () => {
  const url =
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  const res = await fetch(url);
  const data = await res.json();
  return data?.deck_id;
};

export const getDrawCards = async (deck_id) => {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`;

  const res = await fetch(url);
  const data = await res.json();
  return data?.cards;
};

export const getDrawCardsByCount = async (deck_id, count) => {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`;

  const res = await fetch(url);
  const data = await res.json();
  return data?.cards;
};
