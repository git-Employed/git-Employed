import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsActionCreator } from '../actions/actions';
import InterestedCard from './InterestedCard';
import PendingCard from './PendingCard';
import OfferedCard from './OfferedCard';
import ArchiveCard from './ArchiveCard';

export default function CardContainer() {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCardsActionCreator());
    //make sure to change this to whatever the data looks like
  }, [cardDetails.cards.isLoaded]);

  // console.log(
  //   'console logging from Card Container',
  //   cardDetails.cards.cardList
  // );
  const interested = [];
  const pending = [];
  const offered = [];
  const archive = [];
  const interestedCards = cardDetails.cards.cardList.filter(
    (card) => card.status.toLowerCase() === 'interested'
  );
  interested.push(interestedCards);
  // console.log(interestedCards);

  const pendingCards = cardDetails.cards.cardList.filter(
    (card) => card.status.toLowerCase() === 'pending'
  );
  pending.push(pendingCards);

  const offeredCards = cardDetails.cards.cardList.filter(
    (card) => card.status.toLowerCase() === 'offered'
  );
  offered.push(offeredCards);

  const archiveCards = cardDetails.cards.cardList.filter(
    (card) => card.status.toLowerCase() === 'archive'
  );
  archive.push(archiveCards);

  return (
    <div id="cardList-container">
      <React.StrictMode>
        {interested.map((card, index) => {
          return <InterestedCard card={card} key={index} />;
        })}
        {pending.map((card, index) => {
          return <PendingCard card={card} key={index} />;
        })}
        {offered.map((card, index) => {
          return <OfferedCard card={card} key={index} />;
        })}
        {archive.map((card, index) => {
          return <ArchiveCard card={card} key={index} />;
        })}
      </React.StrictMode>
    </div>
  );
}
