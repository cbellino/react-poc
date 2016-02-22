import { List, Map, fromJS } from 'immutable'

export const createFixtures = (store) => {
  // Tracks
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-1', name: 'Awesome track' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-2', name: 'Fugly track' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-3', name: 'Yet another track' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-4', name: 'Yay' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-5', name: 'Waffles' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-6', name: 'Serious cat is serious' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-7', name: 'A track with a loooooooooooooooong name' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-8', name: 'Track #8' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-9', name: 'Track #9' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-10', name: 'Track #10' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-11', name: 'Track #11' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-12', name: 'Track #12' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-13', name: 'Track #13' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-14', name: 'Track #14' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-15', name: 'Track #15' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-16', name: 'Track #16' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-17', name: 'Track #17' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-18', name: 'Track #18' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-19', name: 'Track #19' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-20', name: 'Track #20' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-21', name: 'Track #21' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-22', name: 'Track #22' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-23', name: 'Track #23' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-24', name: 'Track #24' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-25', name: 'Track #25' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-26', name: 'Track #26' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-27', name: 'Track #27' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-29', name: 'Track #29' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-30', name: 'Track #30' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-31', name: 'Track #31' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-32', name: 'Track #32' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-33', name: 'Track #33' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-34', name: 'Track #34' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-35', name: 'Track #35' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-36', name: 'Track #36' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-37', name: 'Track #37' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-38', name: 'Track #38' })
  })
  store.dispatch({
    type: 'ADD_TRACK',
    track: fromJS({ id: 'track-39', name: 'Track #39' })
  })


  // Creatives
  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
      id: 'creative-1',
      name: 'I shot the sheriff',
      url: 'https://adyoulike.com',
      content: {
        title: 'Adipisicing elit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam error cum labore animi, fuga vitae voluptatibus commodi rem, placeat excepturi, quis minus? Illo velit dolore perferendis et minus explicabo quos.',
        image: 'https://i.ytimg.com/vi/2XiYUYcpsT4/hqdefault.jpg',
        link: 'More informations',
      },
      sponso: {
        text: 'Sponsored by',
        name: 'Adyoulike',
        image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
      },
      trackId: 'track-1'
    })
  })
  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
      id: 'creative-2',
      name: 'This is gallifrey',
      url: 'https://google.com',
      content: {
        title: 'Adipisicing elit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe illum aliquid sit, officia neque quae? Iste molestiae provident ipsa, praesentium ea, dolor ab natus laboriosam, culpa, asperiores a distinctio tenetur.',
        image: 'http://www.blastr.com/sites/blastr/files/Gallifrey5.jpg',
        link: 'More informations',
      },
      sponso: {
        text: 'Sponsored by',
        name: 'Adyoulike',
        image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
      },
      trackId: 'track-2'
    })
  })
  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-3',
    name: 'Let\'s jam!',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-2'
    })
  })

  store.dispatch({
  type: 'ADD_CREATIVE',
  creative: fromJS({
    id: 'creative-1',
    name: 'Let\'s jam! 1',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-2',
    name: 'Let\'s jam! 2',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-3',
    name: 'Let\'s jam! 3',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-4',
    name: 'Let\'s jam! 4',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-5',
    name: 'Let\'s jam! 5',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-6',
    name: 'Let\'s jam! 6',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-7',
    name: 'Let\'s jam! 7',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-8',
    name: 'Let\'s jam! 8',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-9',
    name: 'Let\'s jam! 9',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-10',
    name: 'Let\'s jam! 10',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-11',
    name: 'Let\'s jam! 11',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-12',
    name: 'Let\'s jam! 12',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-13',
    name: 'Let\'s jam! 13',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-14',
    name: 'Let\'s jam! 14',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-15',
    name: 'Let\'s jam! 15',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-16',
    name: 'Let\'s jam! 16',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-17',
    name: 'Let\'s jam! 17',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-18',
    name: 'Let\'s jam! 18',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-19',
    name: 'Let\'s jam! 19',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-20',
    name: 'Let\'s jam! 20',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-21',
    name: 'Let\'s jam! 21',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-22',
    name: 'Let\'s jam! 22',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-23',
    name: 'Let\'s jam! 23',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-24',
    name: 'Let\'s jam! 24',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-25',
    name: 'Let\'s jam! 25',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-26',
    name: 'Let\'s jam! 26',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-27',
    name: 'Let\'s jam! 27',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-28',
    name: 'Let\'s jam! 28',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-29',
    name: 'Let\'s jam! 29',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-30',
    name: 'Let\'s jam! 30',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-31',
    name: 'Let\'s jam! 31',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-32',
    name: 'Let\'s jam! 32',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-33',
    name: 'Let\'s jam! 33',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-34',
    name: 'Let\'s jam! 34',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-35',
    name: 'Let\'s jam! 35',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-36',
    name: 'Let\'s jam! 36',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-37',
    name: 'Let\'s jam! 37',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-38',
    name: 'Let\'s jam! 38',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })

  store.dispatch({
    type: 'ADD_CREATIVE',
    creative: fromJS({
    id: 'creative-39',
    name: 'Let\'s jam! 39',
    url: 'https://admin.adyoulike.com',
    content: {
      title: 'Adipisicing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio deleniti laudantium assumenda nulla ad, ut ab molestiae natus fugit quam consequatur magni eos, eligendi praesentium eveniet nostrum ex beatae.',
      image: 'https://i.ytimg.com/vi/-b7gvhCCzos/maxresdefault.jpg',
      link: 'More informations',
    },
    sponso: {
      text: 'Sponsored by',
      name: 'Adyoulike',
      image: 'https://s3-eu-west-1.amazonaws.com/ayl-blobs-storage/blobs/83/83c83dd42dd2eacf/34ed0432fde8bd0f83c83dd42dd2eacf'
    },
    trackId: 'track-8'
    })
  })


}

export const createFixturesFromData = (store, { tracks, creatives }) => {

  tracks.forEach((track) => {
    store.dispatch({
      type: 'ADD_TRACK',
      track: fromJS(track)
    })
  })

  creatives.forEach((creative) => {
    store.dispatch({
      type: 'ADD_CREATIVE',
      creative: fromJS(creative)
    })
  })

}
