<script lang="ts">
  import "magic-scroll";
  import logoImageSrc from "/logo_ch.png";
  import reasonImageSrc from "/reason.png";
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

  const reasonHeaderStyleFn = ({
    pageScrollRatio,
    canvasHeight,
  }: StyleFnArgs) => {
    return {
      transform: `translateY(${
        pageScrollRatio < -0.5
          ? Math.max(-0.25, pageScrollRatio + 0.5) * canvasHeight
          : 0
      }px)`,
      opacity: Math.max(0, pageScrollRatio + 1),
    };
  };

  const reasonImageStyleFn = ({ pageScrollRatio }: StyleFnArgs) => {
    return {
      opacity: Math.max(0, pageScrollRatio + 1),
    };
  };

  const reasonTextStyleFnGenerator =
    (delay: number) =>
    ({ pageScrollRatio, canvasWidth }: StyleFnArgs) => {
      return {
        transform: `translateX(${
          canvasWidth -
          Math.min(1, (pageScrollRatio + 1 - delay) * 1.5) * canvasWidth
        }px)`,
        opacity: Math.min(Math.max(0, pageScrollRatio + 0.5 - delay) * 5),
      };
    };

  const reasonDetailStyleFn = ({ pageScrollRatio }: StyleFnArgs) => {
    return {
      opacity: Math.min(Math.max(0, pageScrollRatio + 0.35) * 5),
    };
  };
</script>

<main>
  <ms-container>
    <ms-item use:prop={["styleFn", logoStyleFn]}
      ><img
        alt="logo"
        src={logoImageSrc}
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
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">联系我们</a>
      </div></ms-item
    >
    <ms-item page-index="2" use:prop={["styleFn", reasonHeaderStyleFn]}
      ><div>
        <span style="font-size: 3rem">选海盛的理由</span>
      </div></ms-item
    >
    <ms-item page-index="2" use:prop={["styleFn", reasonImageStyleFn]}
      ><div style="margin-top: 5rem">
        <img alt="reason" src={reasonImageSrc} />
      </div></ms-item
    >
    <ms-item
      page-index="2"
      use:prop={["styleFn", reasonTextStyleFnGenerator(0)]}
      ><div style="margin-top: calc(5rem + 4rem * 0); margin-left: 500px">
        <span style="font-size: 1.5rem">1. 独一无二的加拿大本土资源</span>
      </div></ms-item
    >
    <ms-item
      page-index="2"
      use:prop={["styleFn", reasonTextStyleFnGenerator(0.05)]}
      ><div style="margin-top: calc(5rem + 4rem * 1); margin-left: 500px">
        <span style="font-size: 1.5rem">2. 量身定做的个性化专业服务</span>
      </div></ms-item
    >
    <ms-item
      page-index="2"
      use:prop={["styleFn", reasonTextStyleFnGenerator(0.1)]}
      ><div style="margin-top: calc(5rem + 4rem * 2); margin-left: 500px">
        <span style="font-size: 1.5rem">3. 无微不至的全过程跟踪服务</span>
      </div></ms-item
    >
    <ms-item
      page-index="2"
      use:prop={["styleFn", reasonTextStyleFnGenerator(0.15)]}
      ><div style="margin-top: calc(5rem + 4rem * 3); margin-left: 500px">
        <span style="font-size: 1.5rem">4. 至高无上的成功率真实保证</span>
      </div></ms-item
    >
    <ms-item page-index="2" use:prop={["styleFn", reasonDetailStyleFn]}
      ><div style="margin-top: 50vh; margin-left: 500px">
        <div style="font-size: 3rem">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#">阅读详情</a>
        </div>
      </div></ms-item
    >
    <ms-item page-index="3"><h1>Something else...</h1></ms-item>
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
