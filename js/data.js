const qnaList = [
  {
    q: '1. 우리집을 간단하게 소개하자면?',
    a: [
      { answer: '1인 가구에 적합한 자취방', type: ['forest', 'ragdoll', 'munchikin', 'british', 'sphynx', 'persian'] },
      { answer: '2인도 충분한 높고 넓은 방', type: ['blue', 'bengal', 'siamese', 'fold', 'american', 'abyssinian', 'angora'] }
    ]
  },
  {
    q: '2. 인형을 선물받았다, 내가 고른 인형은?',
    a: [
      { answer: '왕 크니까 왕 귀여운 사이즈!', type: ['forest', 'ragdoll', 'blue', 'bengal', 'american', 'abyssinian', 'angora', 'persian'] },
      { answer: '작고 소듕한 사이즈가 딱이야!', type: ['munchikin', 'british', 'siamese', 'fold', 'sphynx'] }
    ]
  },
  {
    q: '3. 알러지가 만연한 계절...지금 내 상태는?',
    a: [
      { answer: '굉장히 튼튼한 기관지로 이상무!', type: ['ragdoll', 'blue', 'british', 'fold', 'angora', 'persian'] },
      { answer: '콧물이 주르륵..만성 비염러', type: ['forest', 'munchikin', 'bengal', 'siamese', 'sphynx', 'american', 'abyssinian'] }
    ]
  },
  {
    q: '4. 드디어 기다리던 주말이다! 당신의 계획은?',
    a: [
      { answer: '집순이 모드 발동', type: ['ragdoll', 'blue', 'siamese', 'sphynx', 'american', 'persian'] },
      { answer: '항시 외줄 춘비 완료!', type: ['forest', 'munchikin', 'bengal', 'british', 'fold', 'abyssinian', 'angora'] }
    ]
  },
  {
    q: '5. 친구가 집에 놀러왔다, 자고 간다면?',
    a: [
      { answer: '바닥에 이불을 깔아준다.', type: ['munchikin', 'bengal', 'abyssinian', 'angora'] },
      { answer: '침대에 베개를 하나 더 둔다.', type: ['forest', 'ragdoll', 'blue', 'british', 'siamese', 'fold', 'sphynx', 'american', 'persian']}
    ]
  },

  {
    q: '6. 즐거운 금융치료 다음날, 오늘의 저녁밥은?',
    a: [
      { answer: '아직 여유롭군, 배달 시켜!', type: ['forest', 'ragdoll', 'bengal', 'british', 'fold', 'sphynx', 'abyssinian', 'persian'] },
      { answer: '이것저것 빠지고 나니..컵라면이나 먹자', type: ['blue', 'munchikin', 'siamese', 'american', 'angora'] }
    ]
  },
  {
    q: '7. 소개팅을 받기로 했다. 당신의 취향은?',
    a: [
      { answer: '애교 빼면 시체, 적극적인 사람', type: ['forest', 'ragdoll', 'blue', 'munchikin', 'fold', 'american'] },
      { answer: '진중하면서 담백한 사람', type: ['bengal', 'british', 'siamese', 'sphynx', 'abyssinian', 'angora'] }
    ]
  },
  {
    q: '8. 체중계가 고장난 것 같다..내 살들 어떡하지?',
    a: [
      { answer: '바로 PT 끊으러 간다. MOVE!', type: ['forest', 'bengal', 'siamese', 'abyssinian', 'angora'] },
      { answer: '(TV를 틀며) 이따 산책이나 갈까..', type: ['ragdoll', 'blue', 'munchikin', 'british', 'fold', 'sphynx', 'american', 'angora'] }
    ]
  },
  {
    q: '9. "있잖아..아 아니야.." 나의 반응은?',
    a: [
      { answer: '아니 왜 말을 하다말아 뭔데 뭔데?!?!', type: ['forest', 'ragdoll', 'siamese', 'fold', 'american', 'abyssinian', 'persian'] },
      { answer: '중요한 말 아니였겠지, 넘어간다.', type: ['blue', 'munchikin', 'bengal', 'british', 'sphynx', 'angora'] }
    ]
  },
  {
    q: '10. 약속장소에 단짝이 다른 친구를 데리고 온다면?',
    a: [
      { answer: '셋이 놀면 즐거움이 3배! ^ㅁ^', type: ['forest', 'ragdoll', 'munchikin', 'fold', 'sphynx', 'abyssinian'] },
      { answer: '내,,친군데,,내껀데,,,(찌릿)', type: ['blue', 'bengal', 'british', 'siamese', 'american', 'angora', 'persian'] }
    ]
  }
]

const infoList = [
  {
    name: '우아한 애교쟁이, 노르웨이 숲',
    desc : '사람을 좋아하며 사랑스러운 성격인 장난꾸러기로 크고 튼튼하며 다리도 몸체도 전체적으로 단단한 근육질이라 어른이 되었을 때의 큼직한 체격은 야성미를 더욱 더해준다.'
  },
  {
    name: '인형 아닙니다. 고양이에요!, 랙돌',
    desc : '봉제인형처럼 안아 올리면 몸에 힘을 뺴고 축 늘어진다. 길고 단단한 몸통에 짧고 강한 다리를 가진 종으로 매우 느긋한 성격에 사회적이며 사람을 좋아하여 아이들과 노는것을 좋아한다.'
  },
  {
    name: '이불밖은 위험해!, 러시안블루',
    desc : '푸르스름한 은빛 털색과 신비한 초록 눈빛, 수줍음이 많으면서도 어쩐지 웃고 있는 듯한 표정, 애정이 넘치는 성격이면서도 낯가림을 하는 편으로 친해지는 데에 시간이 걸리지만 한번 마음을 열면 변치 않는 신뢰를 보여준다.'
  },
  {
    name: '다리 짧다고 놀리지 말아요~, 먼치킨',
    desc : '몸통이 길고 다리가 짧다. 짧은 다리에 비해 점프 실력이 좋은 편이며 사교적인 성격으로 놀기 좋아하며 호기심이 많고 활발하면서 다정한 성격으로 비교적 외로움을 잘 탄다.'
  },
  {
    name: '2미터 뒤 호랑이, 뱅갈',
    desc : '이국적인 외모를 가져 살쾡이나 표범을 떠올리게 한다. 독특하고 매력적인 털 무늬로 사랑받으며 매우 활동적이고 사람에게 친근하며, 애교가 많은 성격이다.'
  },
  {
    name: '이상한 나라의 엘리스의 고양이, 브리티시 쇼트헤어',
    desc : '살짝 심술궂어 보이는 인상으로 여러 애니의 고양이의 모델이 되곤 한다. 인상과는 달리 조심스럽고 인내심이 강한 성격으로 집고양이에 어울린다. '
  },
  {
    name: '까만 장화를 신고있지요, 샴',
    desc : '고양이계의 여왕으로 불리며 달의 다이아몬드라는 의미가 있다. 호리호리하고 날씬한 몸매에 성격이 독특하면서도 영리하고 애정이 깊다. 언제나 주인의 관심을 끌려고 하기 때문에 쓰다듬어 주는 것을 좋아한다.'
  },
  {
    name: '갤럭시 폴드 쓰는 고양이, 스코티시 폴드',
    desc : '동그란 얼굴과 동그란 눈, 앞으로 굽은 귀를 보면 그 순진한 첫인상에 그만 웃음을 터뜨리게 된다. 친근한 외모와 사랑스런 성격 덕분에 많은 사랑을 받고 있다. 새로운 환경에 비교적 빨리 적응하고 상냥하며 사람을 좋아한다.'
  },
  {
    name: '오해금지! 이집트랑 관련 없어요, 스핑크스',
    desc : '이름 때문에 오해를 받지만 캐나다 출신으로 털이 전혀 없는 것처럼 보이나, 실제로는 복숭아의 털과 같은 매우 짧고 부드러운 털이 나 있다. 성격이 순하기로 유명해 고양이계의 골든 리트리버라고 불릴 정도이다.'
  },
  {
    name: '나는야 쥐 사냥꾼!, 아메리칸 쇼트헤어',
    desc : '과거 미국에서 선원들이 쥐를 잡기 위해 배에 태웠는데, 그들이 조상이 되었다. 쥐잡이 전문가인 만큼 굵고 단단한 뼈대와 튼튼하고 큼직한 근육질 몸매를 자랑한다. 낙천적이로 쾌활하여 다른 동물들과도 쉽게 친해진다.'
  },
  {
    name: '두가지 매력을 한번에!, 아비시니안',
    desc : '이집트 벽화에서 본듯한 외모, 몸매는 힘 있는 곡선을 그리며, 눈 주변에 마치 아이라인을 그린 듯한 검은 띠가 있다. 온순한 성격이면서도 활발하고 끊임없이 돌아다닌다.'
  },
  {
    name: 'I am 예민해요, 터키시 앙고라',
    desc : '가볍고 날렵한 발걸음은 마치 춤추는 듯하며, 목소리는 부드럽고 달콤하다. 대단히 영리하고 호기심이 많으며 예민한데, 가족 중 한 명만 골라 유독 친근하게 구는 일도 자주 보인다.'
  },
  {
    name: '로켓단 두목님의 고양이다냥, 페르시안',
    desc : '품위 있는 외모에 차분한 성격이 합쳐져 고양이의 귀부인이라는 별명이 잘 어울린다. 말이 없기로도 유명하지만 목소리는 매우 작고 사랑스럽다. 얌전하고 의젓하며 느긋한 성격에 빗질을 좋아한다.',
  }
]
