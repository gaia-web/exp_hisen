<script lang="ts">
  import "magic-scroll";
  import logo from "/logo_ch.png";
  import { attr, prop } from "./utils/attr-prop";

  type StyleFnArgs = {
    pageScrollRatio: number;
    scrollRatio: number;
    pageIndex: number;
    canvasHeight: number;
    canvasWidth: number;
  };

  const logoStyleFn = ({ pageScrollRatio, canvasHeight }: StyleFnArgs) => {
    return {
      transformOrigin: "left",
      transform: `
      translateY(${Math.max(0, pageScrollRatio) * canvasHeight * 0.2}px)
      scale(${Math.max(0, pageScrollRatio) + 1})`,
      opacity: 1 - Math.max(0, pageScrollRatio),
    };
  };

  const introLine1StyleFn = ({ pageScrollRatio, canvasWidth }: StyleFnArgs) => {
    return {
      transform: `
      translateX(${
        pageScrollRatio < -0.6
          ? (Math.max(0, pageScrollRatio + 1.6) - 1) * canvasWidth * 2
          : 0
      }px)`,
    };
  };

  const introLine2StyleFn = ({ pageScrollRatio, canvasWidth }: StyleFnArgs) => {
    return {
      transform: `
      translateX(${
        pageScrollRatio < -0.6
          ? canvasWidth -
            (Math.max(0, pageScrollRatio + 2.1) - 1) * canvasWidth * 2
          : 0
      }px)`,
    };
  };

  const introLine3StyleFn = ({
    pageScrollRatio,
    canvasHeight,
  }: StyleFnArgs) => {
    return {
      transformOrigin: "left",
      transform: `
      translateY(${Math.max(0, pageScrollRatio + 1) * canvasHeight * 0.2}px)
      scale(${Math.max(1, 5 - Math.max(0, pageScrollRatio + 1) * 5)})`,
      opacity: Math.max(0, pageScrollRatio + 1),
    };
  };
</script>

<main>
  <ms-container>
    <ms-item use:prop={["styleFn", logoStyleFn]}
      ><img
        alt="logo"
        src={logo}
        style="margin-top: 50vh; transform: translateY(-50%)"
      /></ms-item
    >
    <ms-item page-index="1" use:prop={["styleFn", introLine1StyleFn]}
      ><div>
        <div>
          <h2 style="color: #6a6a6a">
            <span style="color: #ff8339">海盛可以</span> 助您达到您的移民目标!
          </h2>
        </div>
      </div></ms-item
    >
    <ms-item page-index="1" use:prop={["styleFn", introLine2StyleFn]}
      ><div>
        <div style="margin-top: 5rem">
          <p style="color: #6a6a6a">
            资深持牌顾问帮您办理：加拿大商业移民，各省提名移民，技术移民，家庭团聚移民，留学生转移民，留学生签证，
            学校申请，学生前景规划，工作签证及访问签证等业务
          </p>
        </div>
      </div></ms-item
    >
    <ms-item page-index="1" use:prop={["styleFn", introLine3StyleFn]}
      ><div style="margin-top: 15rem; font-size: 3rem">
        <a
          href="https://web.archive.org/web/20141116160404/http://hisen.ca/index.php/contacts"
          >联系我们</a
        >
      </div></ms-item
    >
    <ms-item page-index="2"><h1>Something else...</h1></ms-item>
  </ms-container>
</main>

<style>
  ms-container {
    height: 100vh;
  }

  ms-item {
    margin: auto;
    width: 80%;
    max-width: 1440px;
    left: 0;
    right: 0;
  }
</style>
