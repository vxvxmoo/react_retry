import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";
import Avatar from "./component/Avatar";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://pbs.twimg.com/profile_images/1571353371310804995/5EuNttEl_400x400.png"
        isNew={true}
      />
      <Profile
        image="https://stat.ameba.jp/user_images/20231212/09/kobato00/66/a6/j/o0580058015375978652.jpg"
        name="うさぎ"
        title="우사기"
        isNew={true}
      />
      <Profile
        image="https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/f271c792ed5349deb39497551f9a473d~tplv-tej9nj120t-origin.webp"
        name="ハチワレ"
        title="하치와레"
      />
      <Profile
        image="https://stickershop.line-scdn.net/stickershop/v1/product/25264193/LINEStorePC/main.png?v=1"
        name="ちいかわ"
        title="치이카와"
        isNew={true}
      />
    </>
  );
}

export default AppProfile;
