import React from 'react';
import AccordionItem from './AccordionItem';
import ThemeToggle from '../ThemeToggle';
import { useAccordion } from '../../hooks/useAccordion';
import { faqData } from '../../data/faqData';
import styles from './Accordion.module.css';

const Accordion = () => {
  const { toggleItem, isItemOpen } = useAccordion([0]); // First item open by default

  return (
    <div className={styles.accordionContainer}>
      <header className={styles.accordionHeader}>
        <h1 className={styles.accordionTitle}>Frequently asked questions</h1>
        <ThemeToggle />
      </header>
      
      <div className={styles.accordionWrapper}>
        {faqData.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            isOpen={isItemOpen(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;