import { useState, useCallback } from 'react';

export const useAccordion = (initialOpenItems = []) => {
  const [openItems, setOpenItems] = useState(initialOpenItems);

  const toggleItem = useCallback((itemId) => {
    setOpenItems(prevOpenItems => {
      if (prevOpenItems.includes(itemId)) {
        return prevOpenItems.filter(id => id !== itemId);
      } else {
        return [...prevOpenItems, itemId];
      }
    });
  }, []);

  const isItemOpen = useCallback((itemId) => {
    return openItems.includes(itemId);
  }, [openItems]);

  const openAll = useCallback(() => {
    setOpenItems(prevItems => prevItems);
  }, []);

  const closeAll = useCallback(() => {
    setOpenItems([]);
  }, []);

  return {
    openItems,
    toggleItem,
    isItemOpen,
    openAll,
    closeAll
  };
};