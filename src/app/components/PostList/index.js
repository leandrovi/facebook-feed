import React, { Component } from "react";

import Post from "../Post";

import { Container } from "./styles";

const posts = [
  {
    id: 1,
    author: {
      name: "Leandro Vieira",
      avatar: "https://avatars1.githubusercontent.com/u/38142332?v=4"
    },
    date: "04 Jun 2019",
    content: `Guys!\n\nDoes anyone have any tips regarding to React and all the features related to it?`,
    comments: [
      {
        id: 1,
        author: {
          name: "Luke Morales",
          avatar: "https://avatars3.githubusercontent.com/u/14251143?v=4"
        },
        content:
          "You can check the Rocketseat channel in youtube: https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg.\n\nThey have pretty nice stuff there!"
      },
      {
        id: 2,
        author: {
          name: "Diego Fernandes",
          avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
        },
        content: "Nice man!"
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Nick Fury",
      avatar:
        "https://i1.wp.com/hnentertainment.co/wp-content/uploads/2019/09/NICK-FURY_TEASED_SPIDER-MAN_MUTANTS_X-MEN_IN-ORIGINAL_IRON-MAN_.jpg?fit=1279%2C676&ssl=1"
    },
    date: "11 Nov 2019",
    content: `I'm hiring new badass people whom interests reflects saving the neediest (i'm thinking something about "Avengers Initiative").\nAnyone interested, inbox!`,
    comments: [
      {
        id: 1,
        author: {
          name: "Tony Stark",
          avatar:
            "https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/05/tony-stark-header.jpg"
        },
        content: "LOL who is this freak?"
      },
      {
        id: 2,
        author: {
          name: "Steve Rogers",
          avatar:
            "https://i.etsystatic.com/15225698/r/il/4bee83/1284168323/il_570xN.1284168323_4urd.jpg"
        },
        content:
          "Sr, I am at your disposal! Do you accept people over 60 but with great health conditions?"
      },
      {
        id: 3,
        author: {
          name: "Groot",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJn_P543Mldh_MLVoOAXM0sgjOK0AMZIonlRMP5UvoL-7Txaq&s"
        },
        content: "I am groot"
      }
    ]
  },
  {
    id: 3,
    author: {
      name: "Ross Geller",
      avatar:
        "https://cdn.cinepop.com.br/2019/09/ross_geller_friends_-1280x720.jpg"
    },
    date: "Today",
    content:
      "Hey, you guys! What do you think about making that beach trip an annual thing?",
    comments: [
      {
        id: 1,
        author: {
          name: "Chandler Bing",
          avatar:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Matthew-Perry-as-Chandler-Bing.jpg"
        },
        content: "NOOOOO!!!!"
      },
      {
        id: 2,
        author: {
          name: "Monica Geller",
          avatar:
            "https://www.estrelando.com.br/uploads/2016/05/12/1-1463088244.gallery.jpg"
        },
        content: "Definitely, NO!"
      },
      {
        id: 3,
        author: {
          name: "Joey Tribbiani",
          avatar:
            "https://s3.crackedcdn.com/phpimages/article/0/0/7/563007_v1.jpg"
        },
        content: "No please noo"
      },
      {
        id: 4,
        author: {
          name: "Rachel Green",
          avatar:
            "http://www.blogmocabonita.com.br/wp-content/uploads/2016/08/tbt-icones-fashionistas-rachel-green.jpg"
        },
        content: "All right, that's it, you guys! What happened out there?"
      },
      {
        id: 5,
        author: {
          name: "Monica Geller",
          avatar:
            "https://www.estrelando.com.br/uploads/2016/05/12/1-1463088244.gallery.jpg"
        },
        content:
          "What? We took a walk, nothing happened. I came back with nothing all over me.."
      },
      {
        id: 6,
        author: {
          name: "Ross Geller",
          avatar:
            "https://cdn.cinepop.com.br/2019/09/ross_geller_friends_-1280x720.jpg"
        },
        content: "Oh, come on! What happened? Joey??"
      },
      {
        id: 7,
        author: {
          name: "Joey Tribbiani",
          avatar:
            "https://s3.crackedcdn.com/phpimages/article/0/0/7/563007_v1.jpg"
        },
        content: "All right! I'm gonna come clean with this!"
      },
      {
        id: 8,
        author: {
          name: "Monica Geller",
          avatar:
            "https://www.estrelando.com.br/uploads/2016/05/12/1-1463088244.gallery.jpg"
        },
        content: "Noooo joey! We swore we'd never tell!"
      },
      {
        id: 9,
        author: {
          name: "Chandler Bing",
          avatar:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Matthew-Perry-as-Chandler-Bing.jpg"
        },
        content: "They'll never understand!"
      },
      {
        id: 10,
        author: {
          name: "Joey Tribbiani",
          avatar:
            "https://s3.crackedcdn.com/phpimages/article/0/0/7/563007_v1.jpg"
        },
        content:
          "Well, we have to say something! We have to get it out! It's eating me alive!!\n\nMonica got stung by a jellyfish..."
      },
      {
        id: 11,
        author: {
          name: "Monica Geller",
          avatar:
            "https://www.estrelando.com.br/uploads/2016/05/12/1-1463088244.gallery.jpg"
        },
        content:
          "All right!! All right..\n\nI got stung. Stung bad. I couldn't stand. I couldn't walk.."
      },
      {
        id: 12,
        author: {
          name: "Chandler Bing",
          avatar:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Matthew-Perry-as-Chandler-Bing.jpg"
        },
        content:
          "We were two miles from the house! Scared and alone.. we didn't think we could make it"
      },
      {
        id: 13,
        author: {
          name: "Monica Geller",
          avatar:
            "https://www.estrelando.com.br/uploads/2016/05/12/1-1463088244.gallery.jpg"
        },
        content: "And I was in too much pain!"
      },
      {
        id: 14,
        author: {
          name: "Joey Tribbiani",
          avatar:
            "https://s3.crackedcdn.com/phpimages/article/0/0/7/563007_v1.jpg"
        },
        content:
          "And I was tired of digging the huge hole!\n\nSo.. i remembered i had seen this thing on The Discovery Channel..."
      },
      {
        id: 15,
        author: {
          name: "Ross Geller",
          avatar:
            "https://cdn.cinepop.com.br/2019/09/ross_geller_friends_-1280x720.jpg"
        },
        content:
          "Wait a minute! I saw that! On The Discovery Channel, yeah! About jellyfish and how if you...\n\nEwwww!! You peed on yourself Monica?!"
      },
      {
        id: 16,
        author: {
          name: "Rachel Green",
          avatar:
            "http://www.blogmocabonita.com.br/wp-content/uploads/2016/08/tbt-icones-fashionistas-rachel-green.jpg"
        },
        content: "EEWWWW!"
      },
      {
        id: 17,
        author: {
          name: "Phoebe Buffay",
          avatar:
            "https://i1.wp.com/mixdeseries.com.br/wp-content/uploads/2017/06/Phoebe.jpg?fit=620%2C383&ssl=1"
        },
        content: "Ewwwwwwww"
      },
      {
        id: 18,
        author: {
          name: "Monica Geller",
          avatar:
            "https://www.estrelando.com.br/uploads/2016/05/12/1-1463088244.gallery.jpg"
        },
        content:
          "You can't say that!! You, don't know!!\n\nI mean I thought I was gonna pass out from the pain!\nAnyway.. I tried.. but I.. couldn't...bend that way.\n\nSo, Joey..."
      },
      {
        id: 19,
        author: {
          name: "Rachel Green",
          avatar:
            "http://www.blogmocabonita.com.br/wp-content/uploads/2016/08/tbt-icones-fashionistas-rachel-green.jpg"
        },
        content: "eeeeeeeeeeewwwww"
      },
      {
        id: 20,
        author: {
          name: "Phoebe Buffay",
          avatar:
            "https://i1.wp.com/mixdeseries.com.br/wp-content/uploads/2017/06/Phoebe.jpg?fit=620%2C383&ssl=1"
        },
        content: "Ewwwwwwww"
      },
      {
        id: 21,
        author: {
          name: "Ross Geller",
          avatar:
            "https://cdn.cinepop.com.br/2019/09/ross_geller_friends_-1280x720.jpg"
        },
        content: "Oh, eeew!"
      },
      {
        id: 22,
        author: {
          name: "Joey Tribbiani",
          avatar:
            "https://s3.crackedcdn.com/phpimages/article/0/0/7/563007_v1.jpg"
        },
        content:
          "THAT'S RIGHT! I STEPPED UP!\n\nShe's my friend and she needed help! And if I had too, I'd pee on anyone of you!!!\n\nOnly.. I couldn't.. I got the stage fright.\nI wanted to help, but there was too much pressure. So.. I turned to Chandler =("
      },
      {
        id: 23,
        author: {
          name: "Chandler Bing",
          avatar:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Matthew-Perry-as-Chandler-Bing.jpg"
        },
        content: "Uuuuurghh =("
      },
      {
        id: 24,
        author: {
          name: "Chandler Bing",
          avatar:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Matthew-Perry-as-Chandler-Bing.jpg"
        },
        content:
          "Joey kept screaming at me, “DO IT NOW!! DO IT! DO IT! DO IT NOW!!”\n\nSometimes late at night I can still hear the screaming... ='("
      },
      {
        id: 25,
        author: {
          name: "Joey Tribbiani",
          avatar:
            "https://s3.crackedcdn.com/phpimages/article/0/0/7/563007_v1.jpg"
        },
        content:
          "LOL That's ‘cause sometimes I just do it through my wall to freak you out hhahahahaahah"
      }
    ]
  }
];

class PostList extends Component {
  state = {
    posts: posts
  };

  render() {
    const { posts } = this.state;

    return (
      <Container>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    );
  }
}

export default PostList;
