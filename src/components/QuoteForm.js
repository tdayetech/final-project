import React, { useState } from "react";
import { inspirationApi } from "../api/InspirationApi";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function QuoteForm() {
  const [quote, setQuote] = useState('');
  const [credit, setCredit] = useState('');
  const [creditor, setCreditor] = useState('');
  const [note, setNote] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (quote && credit && creditor) {
      let inspiration = await inspirationApi.post({quote, credit, creditor, note});
      history.push(`/quote/${inspiration.id}`);
    } else {
      console.log('invalid input');
    }
  };

  return (
    <div className="quoteForm">
      <h4>Add a new quote</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="quote"
          onChange={(e) => setQuote(e.target.value)}
          value={quote}
          required
        />
        <input
          type="text"
          placeholder="credit"
          onChange={(e) => setCredit(e.target.value)}
          value={credit}
          required
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setCreditor(e.target.value)}
          value={creditor}
          required
        />
        <input
          type="text"
          placeholder="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  )
}