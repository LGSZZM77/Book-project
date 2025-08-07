import { Check, HeartPlus, Trash2 } from "lucide-react";
import useAddressStore from "../shared/store/useAddressStore";

const Cart = () => {
  const address = useAddressStore((state) => state.address);
  const setAddress = useAddressStore((state) => state.setAddress);

  const execDaumPostcode = () => {
    new daum.Postcode({
      oncomplete: (data) => {
        let addr = "";
        let extraAddr = "";

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;

          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
        } else {
          addr = data.jibunAddress;
        }

        setAddress(addr + extraAddr);
      },
    }).open();
  };

  return (
    <div className="flex-1 flex items-center justify-center py-8 text-text">
      <div className="flex max-w-screen-xl w-full h-full justify-between items-start gap-8">
        <div className=" flex-3 h-full border-1 border-gray-50 py-6 px-6 rounded-lg">
          <h2 className="text-3xl font-bold pb-4">카트 (2)</h2>
          <div className="w-full h-full flex flex-col gap-8">
            <div className="w-full py-3 px-6 bg-black rounded-md flex gap-2 items-center">
              <span className="font-bold">베송지 : </span>
              <span>{address || "배송지가 설정되지 않았습니다"}</span>
              <button className="bg-white text-black px-1.5 border" onClick={execDaumPostcode}>
                변경
              </button>
            </div>

            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="p-6 bg-gray-500 flex justify-between items-start">
                  <div className="flex">
                    <div className="pr-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
                        <input type="checkbox" className="w-full h-full" defaultChecked />
                      </div>
                    </div>
                    <div className="w-20 h-25 flex items-center justify-center bg-red-500">img</div>
                    <div className="pl-4 flex flex-col gap-0.5">
                      <div>[국내도서] 우아한 타입스크립트 with 리액트</div>
                      <span>10,000 원</span>
                      <span>무료 배송</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button>
                      <HeartPlus size={20} />
                    </button>
                    <button>
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex-1 py-6 px-4 border-1 border-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold pb-4">구매 금액</h2>
          <div className="flex flex-col gap-1 pb-12">
            <div className="flex justify-between">
              <span>상품 금액</span>
              <span>20,000원</span>
            </div>
            <div className="flex justify-between">
              <span>할인 금액</span>
              <span>- 0</span>
            </div>
            <div className="flex justify-between">
              <span>배송비</span>
              <span>무료 배송</span>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black text-white py-3">
            <button className="w-full h-full">20,000원 결제하기 (2개)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
