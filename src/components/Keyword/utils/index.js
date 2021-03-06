export const changeSiteName = (value) => {
  if (value === '아우누리') {
    return 'PORTAL';
  } else if (value === '아우미르') {
    return 'DORM';
  } else if (value === '유튜브') {
    return 'YOUTUBE';
  } else if (value === '페이스북') {
    return 'FACEBOOK';
  }
};
export const changeSite = (value) => {
  if (value === 'PORTAL') {
    return '아우누리';
  } else if (value === 'DORM') {
    return '아우미르';
  } else if (value === 'YOUTUBE') {
    return '유튜브';
  } else if (value === 'FACEBOOK') {
    return '페이스북';
  } else if (value === 'INSTAGRAM') {
    return '인스타그램';
  }
};

export const changeAlarmTerm = (value) => {
  switch (value) {
    case 0:
      return '5';
    case 1:
      return '10';
    case 2:
      return '15';
    case 3:
      return '30';
    case 4:
      return '60';
    case 5:
      return '120';
    case 6:
      return '240';
    default:
      return;
  }
};

export const getTitle = (url) => {
  if (url === 'PORTAL') {
    return '아우누리';
  } else if (url === 'DORM') {
    return '아우미르';
  } else {
    return '대신 전해드립니다 - koreatech';
  }
};

export const makeDeleteQuery = (startId, endId) => {
  let str = '';

  for (let i = startId; i <= endId; i++) {
    if (i == startId) {
      str += `notice-id=${i}`;
    }
    str += `&notice-id=${i}`;
  }
  return str;
};

export const getModalPosition = (keywords, selectItemId) => {
  const indexNumber = keywords.forEach((keyword, index) => {
    if (keyword.id === selectItemId) {
      return index;
    }
  });

  return indexNumber;
};

export const getKeywordName = (keywords, selectItemId) => {
  let keywordName = '';

  keywords &&
    keywords.forEach((keyword) => {
      if (selectItemId === keyword.id) {
        keywordName = keyword.name;
      }
    });

  return keywordName;
};

export const getKeywordPosition = (keywords, selectItemId) => {
  let modalPosition = 0;

  keywords &&
    keywords.forEach((keyword, index) => {
      if (selectItemId === keyword.id) {
        modalPosition = index;
      }
    });

  return modalPosition;
};
