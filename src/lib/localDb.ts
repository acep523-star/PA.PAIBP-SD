export const db = {};

export interface DocRef {
  collection: string;
  id: string;
}

export function doc(dbInstance: any, collection: string, id: string): DocRef {
  return { collection, id };
}

export async function getDoc(docRef: DocRef) {
  const key = `fs_${docRef.collection}_${docRef.id}`;
  const data = localStorage.getItem(key);
  if (data) {
    return {
      exists: () => true,
      data: () => JSON.parse(data),
    };
  }
  return {
    exists: () => false,
    data: () => undefined,
  };
}

export async function setDoc(docRef: DocRef, data: any, options?: { merge?: boolean }) {
  const key = `fs_${docRef.collection}_${docRef.id}`;
  let finalData = data;
  if (options?.merge) {
    const existing = localStorage.getItem(key);
    if (existing) {
      finalData = { ...JSON.parse(existing), ...data };
    }
  }
  localStorage.setItem(key, JSON.stringify(finalData));
}
