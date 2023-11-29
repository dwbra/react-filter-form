const mockedData = [
  {
    id: '1',
    type: 'calendar_event_single',
    name: 'Title One For an Event',
    short_name: 'Title One For an Event',
    created: {
      date: '2023-11-23T21:33:10+11:00',
      user_id: '141698',
    },
    updated: {
      date: '2023-11-23T21:34:33+11:00',
      user_id: '141698',
    },
    published: {
      date: null,
      user_id: null,
    },
    status_changed: {
      date: '1970-01-01T10:00:00+10:00',
      user_id: null,
    },
    urls: ['https://placehold.co'],
    url: 'https://placehold.co',
    attributes: {
      start_date: '2024-03-23T09:00:00+11:00',
      end_date: '2024-03-23T14:00:00+11:00',
      name: 'Lorem ipsum dolor sit amet',
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, lectus sed fermentum gravida, erat lacus pretium enim, nec pulvinar leo mauris et enim. In tristique est libero, in malesuada sem varius vitae. Nunc at neque vitae leo lobortis malesuada. Donec cursus ullamcorper sem, at hendrerit neque feugiat quis. Suspendisse ipsum nisi, rhoncus nec dui eu, finibus vehicula leo. Cras rutrum nibh ultricies tortor egestas tristique. Nullam malesuada volutpat est, in sagittis dui efficitur vel. Curabitur egestas dolor a justo condimentum pharetra.</p>',
    },
    metadata: {
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, lectus sed fermentum gravida, erat lacus pretium enim, nec pulvinar leo mauris et enim. In tristique est libero, in malesuada sem varius vitae. Nunc at neque vitae leo lobortis malesuada. Donec cursus ullamcorper sem, at hendrerit neque feugiat quis. Suspendisse ipsum nisi, rhoncus nec dui eu, finibus vehicula leo. Cras rutrum nibh ultricies tortor egestas tristique. Nullam malesuada volutpat est, in sagittis dui efficitur vel. Curabitur egestas dolor a justo condimentum pharetra.',
      ],
      dateCreated: ['2023-11-23 21:33:10'],
      dateModified: ['2023-11-23 21:34:33'],
      datePublished: ['2023-10-05 00:00:00'],
      bannerImage: ['141091'],
      'event.categories': ['Festivals and Celebrations', 'Sports and Lifestyle'],
      'event.location': ['Brandy Hill', 'Fullerton Cove', 'One Mile', 'Swan Bay'],
    },
    thumbnail: {
      asset_id: '141091',
      url: 'https://placehold.co/600x400?text=Placeholder+Image',
      file_name: 'Lorem ipsum dolor sit amet.jpg',
      width: 1600,
      height: 550,
      file_type: 'jpg',
      file_size: 172489,
      file_size_readable: '168.4 KB',
      title: 'Lorem ipsum dolor sit amet',
      alt: 'Lorem ipsum dolor sit amet',
    },
    additional: {
      event_info: {
        duration: 18000,
        frequency: null,
      },
    },
  },
  {
    id: '2',
    type: 'calendar_event_single',
    name: 'Title Two For an Event',
    short_name: 'Title Two For an Event',
    created: {
      date: '2023-11-23T21:41:04+11:00',
      user_id: '141698',
    },
    updated: {
      date: '2023-11-26T17:47:28+11:00',
      user_id: '141698',
    },
    published: {
      date: null,
      user_id: null,
    },
    status_changed: {
      date: '1970-01-01T10:00:00+10:00',
      user_id: null,
    },
    urls: ['https://placehold.co'],
    url: 'https://placehold.co',
    attributes: {
      start_date: '2023-12-31T21:00:00+11:00',
      end_date: '2024-01-01T02:46:00+11:00',
      name: 'Lorem ipsum dolor sit amet',
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, lectus sed fermentum gravida, erat lacus pretium enim, nec pulvinar leo mauris et enim. In tristique est libero, in malesuada sem varius vitae. Nunc at neque vitae leo lobortis malesuada. Donec cursus ullamcorper sem, at hendrerit neque feugiat quis. Suspendisse ipsum nisi, rhoncus nec dui eu, finibus vehicula leo. Cras rutrum nibh ultricies tortor egestas tristique. Nullam malesuada volutpat est, in sagittis dui efficitur vel. Curabitur egestas dolor a justo condimentum pharetra.</p>',
    },
    metadata: {
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, lectus sed fermentum gravida, erat lacus pretium enim, nec pulvinar leo mauris et enim. In tristique est libero, in malesuada sem varius vitae. Nunc at neque vitae leo lobortis malesuada. Donec cursus ullamcorper sem, at hendrerit neque feugiat quis. Suspendisse ipsum nisi, rhoncus nec dui eu, finibus vehicula leo. Cras rutrum nibh ultricies tortor egestas tristique. Nullam malesuada volutpat est, in sagittis dui efficitur vel. Curabitur egestas dolor a justo condimentum pharetra.',
      ],
      dateCreated: ['2023-11-23 21:41:04'],
      dateModified: ['2023-11-26 17:47:28'],
      datePublished: ['2023-11-15 14:08:25'],
      bannerImage: ['141613'],
      'event.categories': ['Festivals and Celebrations'],
      'event.location': ['Nelson Bay'],
    },
    thumbnail: {
      asset_id: '141613',
      url: 'https://placehold.co/600x400?text=Placeholder+Image',
      file_name: 'Lorem ipsum dolor sit amet.jpg',
      width: 1920,
      height: 640,
      file_type: 'jpg',
      file_size: 143173,
      file_size_readable: '139.8 KB',
      title: 'Lorem ipsum dolor sit amet',
      alt: 'Lorem ipsum dolor sit amet',
    },
    additional: {
      event_info: {
        duration: 20760,
        frequency: null,
      },
    },
  },
  {
    id: '3',
    type: 'calendar_event_recurring',
    name: 'Title Three For an Event',
    short_name: 'Title Three For an Event',
    created: {
      date: '2023-11-26T21:08:16+11:00',
      user_id: '141698',
    },
    updated: {
      date: '2023-11-26T21:18:44+11:00',
      user_id: '141698',
    },
    published: {
      date: null,
      user_id: null,
    },
    status_changed: {
      date: '1970-01-01T10:00:00+10:00',
      user_id: null,
    },
    urls: ['https://placehold.co'],
    url: 'https://placehold.co',
    attributes: {
      start_date: '2023-11-26T11:50:00+11:00',
      end_date: '2023-12-25T21:18:00+11:00',
      frequency: 'WEW',
      stop_date: '2023-11-26T11:50:00+11:00',
      name: 'Lorem ipsum dolor sit amet',
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, lectus sed fermentum gravida, erat lacus pretium enim, nec pulvinar leo mauris et enim. In tristique est libero, in malesuada sem varius vitae. Nunc at neque vitae leo lobortis malesuada. Donec cursus ullamcorper sem, at hendrerit neque feugiat quis. Suspendisse ipsum nisi, rhoncus nec dui eu, finibus vehicula leo. Cras rutrum nibh ultricies tortor egestas tristique. Nullam malesuada volutpat est, in sagittis dui efficitur vel. Curabitur egestas dolor a justo condimentum pharetra.</p>',
    },
    metadata: {
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, lectus sed fermentum gravida, erat lacus pretium enim, nec pulvinar leo mauris et enim. In tristique est libero, in malesuada sem varius vitae. Nunc at neque vitae leo lobortis malesuada. Donec cursus ullamcorper sem, at hendrerit neque feugiat quis. Suspendisse ipsum nisi, rhoncus nec dui eu, finibus vehicula leo. Cras rutrum nibh ultricies tortor egestas tristique. Nullam malesuada volutpat est, in sagittis dui efficitur vel. Curabitur egestas dolor a justo condimentum pharetra.',
      ],
      dateCreated: ['2023-11-26 21:08:16'],
      dateModified: ['2023-11-26 21:18:44'],
      datePublished: ['2023-10-04 00:00:00'],
      bannerImage: ['141065'],
      'event.categories': ['Kids and Family', 'Exhibitions and Workshops', 'Festivals and Celebrations'],
      'event.location': [
        'Balickera',
        'Boat Harbour',
        'Ferodale',
        'Medowie',
        'Nelsons Plains',
        'One Mile',
        'Salt Ash',
        'Soldiers Point',
        'Taylors Beach',
      ],
    },
    thumbnail: {
      asset_id: '141065',
      url: 'https://placehold.co/600x400?text=Placeholder+Image',
      file_name: 'Lorem ipsum dolor sit amet.jpg',
      width: 1600,
      height: 500,
      file_type: 'jpg',
      file_size: 125808,
      file_size_readable: '122.9 KB',
      title: 'Lorem ipsum dolor sit amet',
      alt: 'Lorem ipsum dolor sit amet',
    },
    additional: {
      event_info: {
        duration: 2539680,
        frequency: 'FREQ=WEEKLY;INTERVAL=1;UNTIL=20231126T115000',
      },
    },
  },
];

export default mockedData;
