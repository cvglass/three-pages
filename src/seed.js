const Promise = require('bluebird');
const db = require('./db/db');
const Entry = require('./db/models').Entry;
const User = require('./db/models').User;

const entries = [
  {
    text: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.' + '\n' + 'However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.\n“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”\nMr. Bennet replied that he had not.\n“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”\nMr. Bennet made no answer.\n “Do you not want to know who has taken it?” cried his wife impatiently.\n“You want to tell me, and I have no objection to hearing it.”\nThis was invitation enough.\n“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.”\n“What is his name?”\n“Bingley.”\n“Is he married or single?”\n“Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!”',
    month: '1',
    day: '5',
    year: '2017'
  },
  {
    text: 'Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her. She was the youngest of the two daughters of a most affectionate, indulgent father; and had, in consequence of her sisters marriage, been mistress of his house from a very early period. Her mother had died too long ago for her to have more than an indistinct remembrance of her caresses; and her place had been supplied by an excellent woman as governess, who had fallen little short of a mother in affection.',
    month: '1',
    day: '13',
    year: '2017'
  },
  {
    text: 'The family of Dashwood had long been settled in Sussex. Their estate was large, and their residence was at Norland Park, in the centre of their property, where, for many generations, they had lived in so respectable a manner as to engage the general good opinion of their surrounding acquaintance. The late owner of this estate was a single man, who lived to a very advanced age, and who for many years of his life, had a constant companion and housekeeper in his sister. But her death, which happened ten years before his own, produced a great alteration in his home; for to supply her loss, he invited and received into his house the family of his nephew Mr. Henry Dashwood, the legal inheritor of the Norland estate, and the person to whom he intended to bequeath it. In the society of his nephew and niece, and their children, the old Gentleman\'s days were comfortably spent. His attachment to them all increased. The constant attention of Mr. and Mrs. Henry Dashwood to his wishes, which proceeded not merely from interest, but from goodness of heart, gave him every degree of solid comfort which his age could receive; and the cheerfulness of the children added a relish to his existence. By a former marriage, Mr. Henry Dashwood had one son: by his present lady, three daughters. The son, a steady respectable young man, was amply provided for by the fortune of his mother, which had been large, and half of which devolved on him on his coming of age. By his own marriage, likewise, which happened soon afterwards, he added to his wealth. To him therefore the succession to the Norland estate was not so really important as to his sisters; for their fortune, independent of what might arise to them from their father\'s inheriting that property, could be but small. Their mother had nothing, and their father only seven thousand pounds in his own disposal; for the remaining moiety of his first wife\'s fortune was also secured to her child, and he had only a life-interest in it.',
    month: '1',
    day: '14',
    year: '2017'
  },
  {
    text: 'Sir Walter Elliot, of Kellynch Hall, in Somersetshire, was a man who, for his own amusement, never took up any book but the Baronetage; there he found occupation for an idle hour, and consolation in a distressed one; there his faculties were roused into admiration and respect, by contemplating the limited remnant of the earliest patents; there any unwelcome sensations, arising from domestic affairs changed naturally into pity and contempt as he turned over the almost endless creations of the last century; and there, if every other leaf were powerless, he could read his own history with an interest which never failed. This was the page at which the favourite volume always opened: "ELLIOT OF KELLYNCH HALL." Walter Elliot, born March 1, 1760, married, July 15, 1784, Elizabeth, daughter of James Stevenson, Esq. of South Park, in the county of Gloucester, by which lady (who died 1800) he has issue Elizabeth, born June 1, 1785; Anne, born August 9, 1787; a still-born son, November 5, 1789; Mary, born November 20, 1791." Precisely such had the paragraph originally stood from the printer\'s hands; but Sir Walter had improved it by adding, for the information of himself and his family, these words, after the date of Mary\'s birth--"Married, December 16, 1810, Charles, son and heir of Charles Musgrove, Esq. of Uppercross, in the county of Somerset," and by inserting most accurately the day of the month on which he had lost his wife.',
    month: '1',
    day: '15',
    year: '2017'
  },
  {
    text: '“They are blended,” said he, “I acknowledge; and, were she prosperous, I could allow much for the occasional prevalence of the ridiculous over the good. Were she a woman of fortune, I would leave every harmless absurdity to take its chance, I would not quarrel with you for any liberties of manner. Were she your equal in situation—but, Emma, consider how far this is from being the case. She is poor; she has sunk from the comforts she was born to; and, if she live to old age, must probably sink more. Her situation should secure your compassion. It was badly done, indeed! You, whom she had known from an infant, whom she had seen grow up from a period when her notice was an honour, to have you now, in thoughtless spirits, and the pride of the moment, laugh at her, humble her—and before her niece, too—and before others, many of whom (certainly some,) would be entirely guided by your treatment of her.—This is not pleasant to you, Emma—and it is very far from pleasant to me; but I must, I will,—I will tell you truths while I can; satisfied with proving myself your friend by very faithful counsel, and trusting that you will some time or other do me greater justice than you can do now.”',
    month: '1',
    day: '21',
    year: '2017'
  },
  {
    text: 'There was too much wind to make the high part of the new Cobb pleasant for the ladies, and they agreed to get down the steps to the lower, and all were contented to pass quietly and carefully down the steep flight, excepting Louisa; she must be jumped down them by Captain Wentworth. In all their walks, he had had to jump her from the stiles; the sensation was delightful to her. The hardness of the pavement for her feet, made him less willing upon the present occasion; he did it, however. She was safely down, and instantly, to show her enjoyment, ran up the steps to be jumped down again. He advised her against it, thought the jar too great; but no, he reasoned and talked in vain, she smiled and said, "I am determined I will:" he put out his hands; she was too precipitate by half a second, she fell on the pavement on the Lower Cobb, and was taken up lifeless! There was no wound, no blood, no visible bruise; but her eyes were closed, she breathed not, her face was like death. The horror of the moment to all who stood around!',
    month: '1',
    day: '30',
    year: '2017'
  },
  {
    text: '“As a friend!”—repeated Mr. Knightley.—“Emma, that I fear is a word—No, I have no wish—Stay, yes, why should I hesitate?—I have gone too far already for concealment.—Emma, I accept your offer—Extraordinary as it may seem, I accept it, and refer myself to you as a friend.—Tell me, then, have I no chance of ever succeeding?” He stopped in his earnestness to look the question, and the expression of his eyes overpowered her. “My dearest Emma,” said he, “for dearest you will always be, whatever the event of this hour’s conversation, my dearest, most beloved Emma—tell me at once. Say ‘No,’ if it is to be said.”—She could really say nothing.—“You are silent,” he cried, with great animation; “absolutely silent! at present I ask no more.” Emma was almost ready to sink under the agitation of this moment. The dread of being awakened from the happiest dream, was perhaps the most prominent feeling. “I cannot make speeches, Emma:” he soon resumed; and in a tone of such sincere, decided, intelligible tenderness as was tolerably convincing.—“If I loved you less, I might be able to talk about it more. But you know what I am.—You hear nothing but truth from me.—I have blamed you, and lectured you, and you have borne it as no other woman in England would have borne it.—Bear with the truths I would tell you now, dearest Emma, as well as you have borne with them. The manner, perhaps, may have as little to recommend them. God knows, I have been a very indifferent lover.—But you understand me.—Yes, you see, you understand my feelings—and will return them if you can. At present, I ask only to hear, once to hear your voice.”',
    month: '2',
    day: '2',
    year: '2017'
  }
]

const users = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: '1234'
  },
  {
    name: 'Susan',
    email: 'susan@example.com',
    password: '1234'
  }
]

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  const creatingEntries = Promise.map(entries, function (entry) {
    return Entry.create(entry);
  });
  const creatingUsers = Promise.map(users, function(user) {
    return User.create(user);
  })

  return Promise.all([creatingEntries]);
})
.then(function () {
  console.log('Finished inserting data');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close();
  return null;
});
