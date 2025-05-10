// 📂src/api/zepetoApi.ts
import axios from 'axios';

const ZEPPETO_API_URL = "https://api.zepeto.io/v1";
const USER_ID = "michelle826"; // 🔥 실제 Zepeto User ID
const ACCESS_TOKEN = "Cf9PPe9jX6g6rcCoGaif8kFYr5UEHwAPaP4qS4K7pi9G"; // 🔥 발급받은 Access Token

// 🔍 사용자 인벤토리에서 가구 아이템 조회
export const fetchUserFurniture = async () => {
  try {
    const response = await axios.get(`${ZEPPETO_API_URL}/users/${USER_ID}/inventory`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    // 인벤토리 중 "furniture" 타입만 필터링
    const furnitureItems = response.data.items.filter((item: any) => item.type === "furniture");
    console.log("가구 목록:", furnitureItems);
    return furnitureItems;
  } catch (error) {
    console.error("가구 목록을 불러오는 중 에러가 발생했습니다.", error);
    return [];
  }
};
