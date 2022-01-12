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

  console.log("console logging from Card Container", cardDetails.cards.cardList);
  const interested = [];
  const pending = [];
  const offered = [];
  const archive = [];
  const interestedCards = cardDetails.cards.cardList.filter((card) => (
    card.status.toLowerCase() === 'interested'
  ));
  interested.push(interestedCards);
  // console.log(interestedCards);

  const pendingCards = cardDetails.cards.cardList.filter((card) => (
    card.status.toLowerCase() === 'pending'
  ))
  pending.push(pendingCards);

  const offeredCards = cardDetails.cards.cardList.filter((card) => (
    card.status.toLowerCase() === 'offered'
  ))
  offered.push(offeredCards);

  const archiveCards = cardDetails.cards.cardList.filter((card) => (
    card.status.toLowerCase() === 'archive'
  ))
  archive.push(archiveCards);

  return (
    <div id='cardList-container'>
      {interested.map((card) => {
        return <InterestedCard card={card} />
      })}
      {pending.map((card) => {
        return <PendingCard card={card} />
      })}
      {offered.map((card) => {
        return <OfferedCard card={card} />
      })}
      {archive.map((card) => {
        return <ArchiveCard card={card} />
      })}
    </div>
  )
}
