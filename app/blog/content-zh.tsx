import { Bullet, Callout, Check } from './blog-components'

export const ZH_CONTENT: Record<string, React.ReactNode> = {

  'pisa-2025-zhongguo-jiazhang-zhinan': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        PISA 2025——经合组织国际学生评估项目——公布的结果令全球教育界震惊。经合组织成员国的数学、阅读和科学平均分均跌至历史最低水平。对于家长、学校和政府来说，这提出了一个紧迫的问题：学生的学业成绩到底发生了什么，应该如何应对？
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA 2025数据揭示了什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025测试了来自91个国家的超过76万名15岁学生。主要发现复杂多样，值得仔细阅读而非恐慌。
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet>经合组织阅读平均分从2015年到2025年下降了28分；数学平均分下降了22分。</Bullet>
          <Bullet>领先教育体系（新加坡、日本、韩国）与经合组织平均水平之间的差距进一步扩大。</Bullet>
          <Bullet>使用人工智能完成特定作业（摘要、起草、研究）的学生，科学成绩比不使用人工智能的学生低约20分——相当于一年的学校教育。</Bullet>
          <Bullet>28%的学生报告称同学在科学课上使用数字设备分心。</Bullet>
        </ul>
        <Callout>
          <strong className="text-indigo-900">重要说明：</strong>相关性不等于因果关系。使用人工智能完成作业的学生可能原本就在学习上遇到困难——这既解释了人工智能的使用，也解释了较低的分数。PISA数据无法让我们确定因果方向。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">这对您的孩子意味着什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          对大多数家长来说，最具实际意义的问题不是经合组织的平均分是多少，而是我的孩子在哪里。平均分的下降意味着标准已经降低。一个拥有与五年前同等绝对知识水平的孩子，现在相对于普通同龄人的排名反而更高了。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          对于对竞争性学校、奖学金或顶尖大学感兴趣的家庭来说，这意味着需要用绝对标准而非相对排名来思考。问题不是"我的孩子是否高于平均水平"，而是"他们处于哪个PISA能力水平"——更严格地说——"他们与顶尖教育体系的候选人相比如何"。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">中国在全球教育排名中的位置</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          来自中国大陆、香港和澳门的学生在PISA数学方面持续位居全球前列。新加坡（575分）、日本（536分）和韩国（527分）等亚洲教育体系大幅领先大多数西方国家。这意味着，一个处于英国数学平均水平的学生，大约相当于新加坡或日本的后四分之一水平。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          这不是恐慌的理由——而是做出明智决策的背景。对于孩子考虑竞争性项目或国际职业的家庭来说，了解全球标准比只了解国内排名更有参考价值。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">家长可以做什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025数据指向了家长可以采取的几个具体行动。
        </p>
        <ul className="space-y-4 mb-6">
          <Check><strong>获取基准标准化评估</strong>——了解孩子真实的全球位置是做出任何其他决策的前提。学校成绩无法告诉您这一点。</Check>
          <Check><strong>有意识地讨论人工智能的使用</strong>——不要禁止人工智能工具，但帮助孩子理解使用人工智能促进理解与使用人工智能绕过理解之间的区别。</Check>
          <Check><strong>专注于深度理解</strong>——PISA数据一贯显示，表现最好的学生是那些构建深度概念理解的人，而非死记硬背的人。</Check>
          <Check><strong>减少学习时的数字干扰</strong>——简单的结构性变化（学习时手机放在房间外）对专注度和记忆力有可测量的影响。</Check>
        </ul>
      </section>
    </>
  ),

  'haizi-xueshu-shuiping-ruhe-celiang': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        大多数家长知道孩子在班里的排名。有些人知道学校在国家排名中的位置。但很少有人清楚地了解孩子相对于全国或全球儿童的位置——而正是这些比较被竞争性学校、奖学金委员会和顶尖大学所使用。本文解释了国际教育数据实际显示的内容，如何正确解读这些比较，以及这对您的孩子实际意味着什么。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">国内排名的局限性</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          国内排名和学校成绩回答了一个问题：您的孩子与同学或同一国家教育体系中的其他学生相比表现如何。这是有用的信息，但并不等于知道孩子在国际同龄人中处于什么位置。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          这种差异很重要，因为教育体系在难度上差异显著。一个在本国排名前10%的学生，可能在全球排名前30%或前3%——这取决于其体系与世界标准相比的要求程度。学校通常不会直接传达这种差异，因为他们没有动力这样做。
        </p>
        <Callout>
          <strong className="text-indigo-900">关键区别：</strong>学校成绩将您的孩子与同一体系中的同龄人相比较。标准化评估将您的孩子与全球同龄人相比较。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">什么是PISA及为何重要</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA（国际学生评估项目）是经合组织每三年对80多个国家超过60万名15岁学生进行的最大规模全球教育比较。它测量阅读、数学和科学领域的能力——不仅是事实知识，还有将这些知识应用于解决现实问题的能力。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          经合组织数学平均分约为472分。新加坡（575分）、日本（536分）和韩国（527分）大幅领先大多数西方国家。实际上，这意味着一名处于英国数学平均水平的学生，与亚洲顶尖教育体系中后四分之一的学生水平相当。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何读懂百分位排名</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          百分位排名告诉您您的孩子超过了参考人群中多少比例的人。位于第75百分位的孩子比比较组中75%的孩子表现更好。
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>第90百分位以上</strong>——按国际标准属于卓越水平。</Bullet>
          <Bullet><strong>第75-90百分位</strong>——高于平均水平；是竞争性项目的有力候选人。</Bullet>
          <Bullet><strong>第50-75百分位</strong>——中等范围；在大多数项目中有良好前景。</Bullet>
          <Bullet><strong>第50百分位以下</strong>——低于国际标准平均水平；值得研究哪些领域需要加强。</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">为什么这些数据具有实际意义</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          竞争性学校、奖学金项目和顶尖大学以国际标准思考问题——尤其是随着招生全球化。了解孩子真实全球位置的家长，能够就学校选择、在哪里值得投入精力改进以及哪些机构是现实和雄心勃勃的目标做出更明智的决策。
        </p>
      </section>
    </>
  ),

  'gaozhong-shixi-ruhe-xunzhao': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        对大多数高中生来说，"实习"这个词会让人联想到送咖啡和复印文件的画面。有研究支持的现实却重要得多。14-18岁的结构化工作经验在个性、职业准备和大学录取结果上产生了可测量的变化。本文从各个维度审视证据，依据纵向研究、雇主调查和大学录取数据。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">为什么14-18岁是关键时期</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          发展心理学家长期以来将青少年时期视为高度身份形成的时期。在这一时期与成人工作世界互动的青少年，更有可能实现"身份认同"——对自己是谁、要往哪里去的稳定、自我导向的理解。
        </p>
        <Callout>
          <strong className="text-indigo-900">科学共识：</strong>雇主在高中阶段的参与是继续教育和早期职业成功两方面最有力的预测指标之一——超过许多校内干预措施。来源：Education and Employers，《激励实现》（2018年）。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">实习培养的四个个性维度</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          研究一致指出与高中阶段结构化工作经验相关的四个具体发展结果。
        </p>
        <ul className="space-y-4 mb-6">
          <Check><strong>自我效能感</strong>——通过真实的掌握经验建立起对自身能力的信念，而非与结果无关的鼓励。</Check>
          <Check><strong>韧性</strong>——通过在不可预测的工作环境中产生性挑战而获得。韧性是一种可以训练的技能，而非性格特征。</Check>
          <Check><strong>职业沟通</strong>——撰写商务邮件、展示工作成果、管理层级关系。这些技能很少被明确教导，但雇主始终在寻找。</Check>
          <Check><strong>职业清晰度</strong>——从直接经验了解某个领域是否适合自己，从而降低19岁时代价高昂的换方向风险。</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何找到实习机会：四个渠道</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          找到高质量实习机会有四个主要渠道，各有其权衡。
        </p>
        <ul className="space-y-4 mb-6">
          <Check><strong>直接申请本地企业</strong>——对中小企业尤为有效。一封精心撰写的申请邮件往往会得到回应。提供具体日期，解释您在寻找什么，并说明任何相关经历。</Check>
          <Check><strong>大型机构的结构化项目</strong>——巴克莱、毕马威、德勤、高盛和大多数大型专业服务公司为12年级和13年级学生提供春季和夏季洞察项目。申请通常在9月至11月开放。</Check>
          <Check><strong>学校职业顾问推荐</strong>——许多学校有学生未充分利用的雇主关系。值得明确询问顾问学校有哪些雇主联系。</Check>
          <Check><strong>工作经验平台</strong>——Springpod、Bright Network和Virtual Work Experience提供结构化的虚拟体验，适合无法进行现场实习的情况。</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何让实习经历在大学申请中发挥最大作用</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          工作经验以三种具体方式强化大学申请。首先，它为您的个人陈述添加具体、有据可查的内容，说明您对某个领域的兴趣——"我观察到财务职能是如何运作的"远比"我对金融感兴趣"更有说服力。其次，它展示了商业成熟度——在专业环境中运作的能力，这是竞争性商业和经济学项目招生官所看重的。第三，它降低了选择错误课程的风险，让您能够首先直接评估某个商业环境是否适合您。
        </p>
      </section>
    </>
  ),

}

export function getChineseBlogContent(slug: string): React.ReactNode {
  return ZH_CONTENT[slug] ?? (
    <p className="text-gray-600 leading-relaxed">
      文章内容即将上线。
    </p>
  )
}
