export const getItem = (id: string) => {
  if (typeof window !== "undefined") return localStorage.getItem(id);
};

export const setItem = (id: string, value: string) => {
  if (typeof window !== "undefined") localStorage.setItem(id, value);
};

export const removeItem = (id: string) => {
  if (typeof window !== "undefined") localStorage.removeItem(id);
};
