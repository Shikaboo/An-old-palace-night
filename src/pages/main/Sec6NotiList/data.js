const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

export const posts = [
    // 공지사항 카테고리
    { id: 146, title: '상반기 달빛기행 행사 안내', content: '창덕궁 달빛기행은 전문해설사와 함께 궁궐의 곳곳을 관람하며, 각 전각에 대한 해설과 전통예술공연을 관람할 수 있는 프로그램입니다. \n\n창덕궁 정문인 돈화문에서 출발해 진선문 · 인정전 · 희정당 · 낙선재 · 상량정 · 부용지 · 불로문 · 애련정 · 연경당 · 후원 숲길을 이동하며 창덕궁 달빛기행에서만 경험할 수 있는 특별한 감동을 선사할 것입니다.\n\n\n행사개요\n\n  가. 행사기간 : 4. 11.(목) ~ 6. 2.(일) 매주 목~일요일 (5.9.(목), 5.30.(목) 휴무)\n\n  나. 행사시간 : 1부 19:20 ( 19:20 / 19:25 / 19:30 )  2부 20:00 ( 20:00 / 20:05 / 20:10 )   *110분간\n\n  다. 행사내용 : 창덕궁 야간탐방 및 전통예술공연 관람\n\n  라. 참가인원 : 1일 150명 \n\n  마. 프로그램 소개\n\n     ㅇ 야간기행 : 해설사의 이야기를 통해 창덕궁의 역사·문화·조경을 자연스럽게  체험할 수 있는 야간 기행\n\n     ㅇ 각 장소별 특화된 전통예술공연 진행(상량정, 영화당, 연경당)\n\n     ㅇ 안내해설 : 달빛기행을 위해 특화된 안내해설 제공\n\n     ㅇ 관람동선 : 돈화문 → 진선문 → 인정전 → 희정당 → 낙선재 → 상량정 → 부용지 → 애련정과 애련지 → 연경당 → 후원 숲길 → 금호문\n\n  바. 주최/주관 : 문화재청 궁능유적본부/ 한국문화재재단\n\n  사. 인터넷 예매,전화예매문의: 티켓링크 고객센터  1588-7890   / 프로그램 관련 문의: 1522-2295', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 145, title: '티켓예매 일정 안내', content: ' 가. 예매일정\n\n    - 1차) 2024. 3. 28.(목) 16시 (행사기간 : 2024.4.11~4.26)\n    - 2차) 2024. 4. 17.(수) 16시 (행사기간 : 2024.5.4.~6.2.)\n    - 예매마감 : 관람일 당일 오전 10시\n    - 취소마감 : 관람일 전일 17시​\n\n 나. 예매가격 : 1인 30,000원 최대 1인 2매\n\n 다. 할인 : 장애인 50% 할인: 중증(1~3급) 본인포함 2인, 경증(4급 이하) 본인 한정 / 국가유공자 본인 한정 50% 할인​\n\n감사합니다.', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 144, title: '전화예매 안내', content: '예매 대상 만 65세 이상, 국가유공자,장애인\n\n예매방법 1588-7890\n\n예매시간 평일 9:00~18:00 / 토,일요일 및 공휴일 휴무\n1인 최대 2매까지 예매 가능합니다.\n\n※ 꼭 본인이 참여 하여야 하며, 참여하지 않으면 현장에서 취소 됩니다.', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 143, title: '할인정보 안내', content: '장애인 50% 할인(1~3급은 본인 포함 2인, 4급 이하는 본인 한정)\n국가유공자 본인 한정 50% 할인\n\n현장에서 증빙자료를 확인할 예정이오니 신분증(국가유공자증, 장애인 복지카드 등)을 반드시 지참하여 주시기 바랍니다.\n증빙 미지참 시 입장이 불가한 점 양해 부탁드립니다.', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 142, title: '티켓 수령안내', content: '1) 일반배송\n\n예매 완료(결제 완료)확인 후, 인편배송으로 영업일 기준 10일 이내 티켓을 수령하실 수 있습니다.\n티켓을 배송하기 위한 배송료는 고객이 부담합니다.\n행사 또는 관람일에 따라 일반배송 선택이 제한될 수 있습니다.​\n\n2) 현장수령\n\n행사 당일 공연 시작 시간 1시간 전 ~ 30분 전까지 행사장 매표소에서 티켓을 수령하실 수 있습니다.\n현장 매표소에서 예매 완료 SMS 또는 예매번호 및 예매자 정보 확인 후 티켓을 수령할 수 있습니다.\n기획사 정책 또는 행사일에 따라 현장 수령 방법의 선택이 제한될 수 있습니다.​', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 141, title: '달빛기행 - 게시글 20', content: '달빛기행 - 게시글 20 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 140, title: '달빛기행 - 게시글 19', content: '달빛기행 - 게시글 19 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 139, title: '달빛기행 - 게시글 18', content: '달빛기행 - 게시글 18 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 138, title: '달빛기행 - 게시글 17', content: '달빛기행 - 게시글 17 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 137, title: '달빛기행 - 게시글 16', content: '달빛기행 - 게시글 16 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 136, title: '달빛기행 - 게시글 15', content: '달빛기행 - 게시글 15 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 135, title: '달빛기행 - 게시글 14', content: '달빛기행 - 게시글 14 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 134, title: '달빛기행 - 게시글 13', content: '달빛기행 - 게시글 13 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 133, title: '달빛기행 - 게시글 12', content: '달빛기행 - 게시글 12 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 132, title: '달빛기행 - 게시글 11', content: '달빛기행 - 게시글 11 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 131, title: '달빛기행 - 게시글 10', content: '달빛기행 - 게시글 10 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 130, title: '달빛기행 - 게시글 9', content: '달빛기행 - 게시글 9 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 129, title: '달빛기행 - 게시글 8', content: '달빛기행 - 게시글 8 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 128, title: '달빛기행 - 게시글 7', content: '달빛기행 - 게시글 7 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 127, title: '달빛기행 - 게시글 6', content: '달빛기행 - 게시글 6 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 126, title: '달빛기행 - 게시글 5', content: '달빛기행 - 게시글 5 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 125, title: '달빛기행 - 게시글 4', content: '달빛기행 - 게시글 4 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 124, title: '달빛기행 - 게시글 3', content: '달빛기행 - 게시글 3 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 123, title: '달빛기행 - 게시글 2', content: '달빛기행 - 게시글 2 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    { id: 121, title: '달빛기행 - 게시글 1', content: '달빛기행 - 게시글 1 내용', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moon' },
    // 별빛야행 카테고리
    { id: 120, title: '상반기 별빛야행 행사 안내', content: '행사기간 / 4월 3일(수) ~ 5월 4일(토) 매주 수~일요일 18:40, 19:40 (4.26.(금) 제외, 5.2.(목)~5.4.(토) 외국인 행사)\n\n장소 / 경복궁 소주방, 집옥재, 건청궁, 향원정 등\n\n대상 / 선착순 접수 / 1차 : 3.22.(금) 14:00 / 2차 : 4.12.(금) 14:00 (1인당 6만원)', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 119, title: '상반기 별빛야행 티켓 구매 안내', content: '구매링크 https://www.ticketlink.co.kr/product/49248 \n\n해당 사이트에서 구매 부탁드립니다.\n\n티켓은 선착순 예매이므로 판매시작후 조기에 종료될 수 있습니다.', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 118, title: '행사 예매전화 안내', content: '만65세 이상, 장애인, 국가유공자를 대상으로 전화예매(1588-7890) 받습니다.\n\n그외 일반 문의는 1522-2295로 전화주세요.', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 117, title: '행사 주의사항 안내', content: '행사 주의사항에 대해 알려드리겠습니다.\n\n- 경복궁 별빛야행 야간 해설탐방이 약 110분에 걸쳐 진행되며 내부 관람도 포함되어 있으니 편한 신발을 착용해주세요.\n\n- 플래시와 삼각대는 사용이 불가하며, 음식물 반입 금지입니다.\n\n- <경복궁 별빛야행>전화예약 및 할인 혜택을 받은 참가자는 본인이 직접 참석 하셔야 합니다.\n\n- <경복궁 별빛야행>은 지인 간의 양도가 불가능 합니다.\n\n* 단, 직계가족 및 형제/자매에 한해 참가자 신분증, 증빙자료(등본, 가족관계증명서 등) 확인 후 입장이 가능합니다.\n\n- 8세 취학아동 이상 관람이 가능하며, 취학아동 및 청소년은 반드시 보호자 동반하여 입장이 가능합니다\n\n- 채식메뉴를 원하시는 분은 참여일 3일전까지 티켓링크 콜센터(1588-7890)를 통해 사전 신청 부탁드립니다.\n\n* 무통장 입금 결제는 불가합니다.​', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 116, title: '티켓 판매일정', content: '- 예매기간 \n\n 1차) 2024. 3. 22.(금) 14시 ~ (행사일:2024.4.03.(수) ~ 4.21.(일))\n\n 2차) 2024. 4. 12.(금) 14시 ~ (행사일:2024.4.24.(수) ~ )\n\n- 예매마감 : 관람일 당일 오전 10시\n\n- 취소마감 : 관람일 전일 17시 \n\n<경복궁 별빛야행>은 행사 전일 17시까지 취소가 가능하며 기간 내 취소 수수료가 부과되지 않습니다.', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 115, title: '별빛야행 - 게시글 55', content: '별빛야행 - 게시글 55 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 114, title: '별빛야행 - 게시글 54', content: '별빛야행 - 게시글 54 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 113, title: '별빛야행 - 게시글 53', content: '별빛야행 - 게시글 53 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 112, title: '별빛야행 - 게시글 52', content: '별빛야행 - 게시글 52 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 111, title: '별빛야행 - 게시글 51', content: '별빛야행 - 게시글 51 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 110, title: '별빛야행 - 게시글 50', content: '별빛야행 - 게시글 50 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 109, title: '별빛야행 - 게시글 49', content: '별빛야행 - 게시글 49 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 108, title: '별빛야행 - 게시글 48', content: '별빛야행 - 게시글 48 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 107, title: '별빛야행 - 게시글 47', content: '별빛야행 - 게시글 47 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 106, title: '별빛야행 - 게시글 46', content: '별빛야행 - 게시글 46 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 105, title: '별빛야행 - 게시글 45', content: '별빛야행 - 게시글 45 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 104, title: '별빛야행 - 게시글 44', content: '별빛야행 - 게시글 44 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 103, title: '별빛야행 - 게시글 43', content: '별빛야행 - 게시글 43 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 102, title: '별빛야행 - 게시글 42', content: '별빛야행 - 게시글 42 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 101, title: '별빛야행 - 게시글 41', content: '별빛야행 - 게시글 41 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 100, title: '별빛야행 - 게시글 40', content: '별빛야행 - 게시글 40 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 99, title: '별빛야행 - 게시글 39', content: '별빛야행 - 게시글 39 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 98, title: '별빛야행 - 게시글 38', content: '별빛야행 - 게시글 38 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 97, title: '별빛야행 - 게시글 37', content: '별빛야행 - 게시글 37 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 96, title: '별빛야행 - 게시글 36', content: '별빛야행 - 게시글 36 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 95, title: '별빛야행 - 게시글 35', content: '별빛야행 - 게시글 35 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 94, title: '별빛야행 - 게시글 34', content: '별빛야행 - 게시글 34 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 93, title: '별빛야행 - 게시글 33', content: '별빛야행 - 게시글 33 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 92, title: '별빛야행 - 게시글 32', content: '별빛야행 - 게시글 32 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 91, title: '별빛야행 - 게시글 31', content: '별빛야행 - 게시글 31 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 90, title: '별빛야행 - 게시글 30', content: '별빛야행 - 게시글 30 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 89, title: '별빛야행 - 게시글 29', content: '별빛야행 - 게시글 29 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 88, title: '별빛야행 - 게시글 28', content: '별빛야행 - 게시글 28 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 87, title: '별빛야행 - 게시글 27', content: '별빛야행 - 게시글 27 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 86, title: '별빛야행 - 게시글 26', content: '별빛야행 - 게시글 26 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 85, title: '별빛야행 - 게시글 25', content: '별빛야행 - 게시글 25 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 84, title: '별빛야행 - 게시글 24', content: '별빛야행 - 게시글 24 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 83, title: '별빛야행 - 게시글 23', content: '별빛야행 - 게시글 23 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 82, title: '별빛야행 - 게시글 22', content: '별빛야행 - 게시글 22 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 81, title: '별빛야행 - 게시글 21', content: '별빛야행 - 게시글 21 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 80, title: '별빛야행 - 게시글 20', content: '별빛야행 - 게시글 20 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 79, title: '별빛야행 - 게시글 19', content: '별빛야행 - 게시글 19 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 78, title: '별빛야행 - 게시글 18', content: '별빛야행 - 게시글 18 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
	{ id: 77, title: '별빛야행 - 게시글 17', content: '별빛야행 - 게시글 17 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 76, title: '별빛야행 - 게시글 16', content: '별빛야행 - 게시글 16 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 75, title: '별빛야행 - 게시글 15', content: '별빛야행 - 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 74, title: '별빛야행 - 게시글 14', content: '별빛야행 - 게시글 14 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 73, title: '별빛야행 - 게시글 13', content: '별빛야행 - 게시글 13 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 72, title: '별빛야행 - 게시글 12', content: '별빛야행 - 게시글 12 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 71, title: '별빛야행 - 게시글 11', content: '별빛야행 - 게시글 11 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 70, title: '별빛야행 - 게시글 10', content: '별빛야행 - 게시글 10 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 69, title: '별빛야행 - 게시글 9', content: '별빛야행 - 게시글 9 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 68, title: '별빛야행 - 게시글 8', content: '별빛야행 - 게시글 8 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 67, title: '별빛야행 - 게시글 7', content: '별빛야행 - 게시글 7 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 66, title: '별빛야행 - 게시글 6', content: '별빛야행 - 게시글 6 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 65, title: '별빛야행 - 게시글 5', content: '별빛야행 - 게시글 5 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 64, title: '별빛야행 - 게시글 4', content: '별빛야행 - 게시글 4 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 63, title: '별빛야행 - 게시글 3', content: '별빛야행 - 게시글 3 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 62, title: '별빛야행 - 게시글 2', content: '별빛야행 - 게시글 2 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    { id: 61, title: '별빛야행 - 게시글 1', content: '별빛야행 - 게시글 1 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'star' },
    // 공지사항 카테고리
	{ 
		id: 60, 
		title: '홈페이지 리뉴얼 안내', 
		content: '2024년 2분기 홈페이지 리뉴얼 안내입니다.\n\n홈페이지 개편 후 이용에 불편함이 있으실 경우\n\n콜센터 1588 - 7890로 연락주시면 도와드리겠습니다.\n\n(업무시간 평일 10:00 ~ 19:00 / 토, 일, 공휴일 휴무)',
		author: '관리자', 
		category: '공지사항', 
		time: formatDate(new Date()), 
		key: 'noti' 
	  },
    { id: 59, title: '홈페이지 사용가이드', content: '사이트 내에 경복궁 별빛야행, 창덕궁 달빛기행에 관련된 컨텐츠를 클릭하면\n공지사항, 축제소개, 갤러리등을 해당 컨텐츠로 이용하실 수 있습니다.\n\n감사합니다.', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 58, title: '홈페이지 새로운 커뮤니티 공간 오픈!', content: '우리의 새로운 커뮤니티 공간에서는 여행에 관한 이야기를 나누고, 소중한 경험을 공유할 수 있어요.\n함께 여행하는 이들과의 소통을 더욱 즐겁게 즐겨보세요.\n\n갤러리 페이지, 축제후기에서 여러분들의 이야기를 나누어주세요.\n\n자세한건 최상단의 갤러리 탭을 눌러주세요.', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 57, title: '문의하실 내용은 고객지원 탭을 확인해주세요', content: '자주하는 질문에서 문의사항을 확인해주셔도 되고,\n묻고 답하기 탭에 문의주시면 더욱 더 정확한 답변을 받으실 수 있습니다.\n\n자세한 내용은 상단의 고객지원 탭을 클릭해 주세요.', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 56, title: '갤러리 게시판 사용공지', content: '게시판에 폭언, 욕설 및 혐오감을 조성하는 사진은 사전에 예고없이 삭제될 수 있습니다.\n\n악의적인 글 개제시 홈페이지 이용에 제한이 될 수 있습니다.', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 55, title: '우리의 공동의 가치, 문화재를 함께 지키자!', content: '여러분 안녕하세요,\n\n우리는 자랑스러운 우리나라의 역사와 전통을 지켜가는데 큰 자부심을 느낍니다.\n\n이러한 자랑스러운 역사는 우리의 문화재를 통해 전해지고 있습니다. 그러나 오늘날, 우리의 문화재는 다양한 위협에 직면하고 있습니다.\n\n도심화, 환경오염, 그리고 인위적인 손상 등이 그 예입니다.\n\n우리는 이러한 문화재의 손상을 막기 위해 함께 노력해야 합니다.\n\n우리의 소중한 유산을 보존하고, 다음 세대에 전해주기 위해서는 우리 모두가 책임을 져야 합니다.\n\n각자가 조금씩 실천할 수 있는 방법이 있습니다.\n\n거리에서 발견한 쓰레기를 주워 버리거나, 문화재 주변을 정돈하는 등의 작은 노력도 큰 변화를 이끌어낼 수 있습니다.\n\n우리는 함께 모여 문화재를 보호하고 지켜나가야 합니다.\n\n이는 우리의 미래를 위한 투자이며, 우리 자신과 우리 자녀들에게 남길 가치 있는 유산입니다.\n\n함께 문화재를 지키는 일에 참여해주시길 부탁드립니다.\n\n감사합니다.', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 54, title: '공지사항 - 게시글 54', content: '공지사항 - 게시글 54 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 53, title: '공지사항 - 게시글 53', content: '공지사항 - 게시글 53 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 52, title: '공지사항 - 게시글 52', content: '공지사항 - 게시글 52 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 51, title: '공지사항 - 게시글 51', content: '공지사항 - 게시글 51 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 50, title: '공지사항 - 게시글 50', content: '공지사항 - 게시글 50 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 49, title: '공지사항 - 게시글 49', content: '공지사항 - 게시글 49 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 48, title: '공지사항 - 게시글 48', content: '공지사항 - 게시글 48 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 47, title: '공지사항 - 게시글 47', content: '공지사항 - 게시글 47 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 46, title: '공지사항 - 게시글 46', content: '공지사항 - 게시글 46 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 45, title: '공지사항 - 게시글 45', content: '공지사항 - 게시글 45 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 44, title: '공지사항 - 게시글 44', content: '공지사항 - 게시글 44 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 43, title: '공지사항 - 게시글 43', content: '공지사항 - 게시글 43 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
	{ id: 42, title: '공지사항 - 게시글 42', content: '공지사항 - 게시글 42 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 41, title: '공지사항 - 게시글 41', content: '공지사항 - 게시글 41 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 40, title: '공지사항 - 게시글 40', content: '공지사항 - 게시글 40 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 39, title: '공지사항 - 게시글 39', content: '공지사항 - 게시글 39 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 38, title: '공지사항 - 게시글 38', content: '공지사항 - 게시글 38 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 37, title: '공지사항 - 게시글 37', content: '공지사항 - 게시글 37 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 36, title: '공지사항 - 게시글 36', content: '공지사항 - 게시글 36 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 35, title: '공지사항 - 게시글 35', content: '공지사항 - 게시글 35 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 34, title: '공지사항 - 게시글 34', content: '공지사항 - 게시글 34 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 33, title: '공지사항 - 게시글 33', content: '공지사항 - 게시글 33 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 32, title: '공지사항 - 게시글 32', content: '공지사항 - 게시글 32 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 31, title: '공지사항 - 게시글 31', content: '공지사항 - 게시글 31 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 30, title: '공지사항 - 게시글 30', content: '공지사항 - 게시글 30 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 29, title: '공지사항 - 게시글 29', content: '공지사항 - 게시글 29 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 28, title: '공지사항 - 게시글 28', content: '공지사항 - 게시글 28 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 27, title: '공지사항 - 게시글 27', content: '공지사항 - 게시글 27 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 26, title: '공지사항 - 게시글 26', content: '공지사항 - 게시글 26 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 25, title: '공지사항 - 게시글 25', content: '공지사항 - 게시글 25 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 24, title: '공지사항 - 게시글 24', content: '공지사항 - 게시글 24 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 23, title: '공지사항 - 게시글 23', content: '공지사항 - 게시글 23 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 22, title: '공지사항 - 게시글 22', content: '공지사항 - 게시글 22 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 21, title: '공지사항 - 게시글 21', content: '공지사항 - 게시글 21 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 20, title: '공지사항 - 게시글 20', content: '공지사항 - 게시글 20 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 19, title: '공지사항 - 게시글 19', content: '공지사항 - 게시글 19 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 18, title: '공지사항 - 게시글 18', content: '공지사항 - 게시글 18 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 17, title: '공지사항 - 게시글 17', content: '공지사항 - 게시글 17 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 16, title: '공지사항 - 게시글 16', content: '공지사항 - 게시글 16 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 15, title: '공지사항 - 게시글 15', content: '공지사항 - 게시글 15 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 14, title: '공지사항 - 게시글 14', content: '공지사항 - 게시글 14 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 13, title: '공지사항 - 게시글 13', content: '공지사항 - 게시글 13 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 12, title: '공지사항 - 게시글 12', content: '공지사항 - 게시글 12 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 11, title: '공지사항 - 게시글 11', content: '공지사항 - 게시글 11 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 10, title: '공지사항 - 게시글 10', content: '공지사항 - 게시글 10 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 9, title: '공지사항 - 게시글 9', content: '공지사항 - 게시글 9 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 8, title: '공지사항 - 게시글 8', content: '공지사항 - 게시글 8 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 7, title: '공지사항 - 게시글 7', content: '공지사항 - 게시글 7 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 6, title: '공지사항 - 게시글 6', content: '공지사항 - 게시글 6 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 5, title: '공지사항 - 게시글 5', content: '공지사항 - 게시글 5 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 4, title: '공지사항 - 게시글 4', content: '공지사항 - 게시글 4 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 3, title: '공지사항 - 게시글 3', content: '공지사항 - 게시글 3 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 2, title: '공지사항 - 게시글 2', content: '공지사항 - 게시글 2 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' },
    { id: 1, title: '공지사항 - 게시글 1', content: '공지사항 - 게시글 1 내용', author: '관리자', category: '공지사항', time: formatDate(new Date()), key: 'noti' }
];