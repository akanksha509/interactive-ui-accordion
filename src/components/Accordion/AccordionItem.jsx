import React, { useRef, useEffect } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ 
  item, 
  isOpen, 
  onToggle, 
  index 
}) => {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  const handleClick = () => {
    onToggle();
  };

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button
        ref={buttonRef}
        className={styles.accordionButton}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`panel-${item.id}`}
        id={`button-${item.id}`}
      >
        <span className={styles.questionText}>
          Q{index + 1}. {item.question}
        </span>
        <span 
          className={`${styles.accordionIcon} ${isOpen ? styles.iconOpen : ''}`}
          aria-hidden="true"
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div
        ref={contentRef}
        className={styles.accordionContent}
        id={`panel-${item.id}`}
        role="region"
        aria-labelledby={`button-${item.id}`}
      >
        <div className={styles.accordionAnswer}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;