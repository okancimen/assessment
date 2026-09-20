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
        <p className="text-gray-700 leading-relaxed mb-4">找到机会后，下一步是准备好<a href="/zh/blog/shixi-jianlixie-zhinan" className="text-indigo-600 hover:underline font-medium">实习简历</a>和<a href="/zh/blog/shixi-mianshi-zhunbei-jiqiao" className="text-indigo-600 hover:underline font-medium">面试技巧</a>——我们的专题指南涵盖高中生的完整申请准备。</p>
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

      <section>
        <Callout color="indigo">
          <strong className="text-indigo-900">找到实习前，先了解你的准备度。</strong> <a href="/zh/shixi" className="underline font-semibold">Eduentry免费评估</a> — 34题35分钟 — 测量你的综合能力、专业知识和职场技能，生成个性化报告，帮你明确最适合申请的实习赛道。
        </Callout>
      </section>
    </>
  ),

  'shixi-jianlixie-zhinan': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        大多数高中生在写简历时犯同一个错误：试图"填满"页面，把每一行空白都塞进内容。招聘实习生的招聘官每天看几十份申请，他们需要的不是篇幅，而是清晰度和真实感。没有工作经验也能写出有说服力的简历——前提是你知道该展示什么。简历完成后，建议同步进行<a href="/zh/blog/shixi-mianshi-zhunbei-jiqiao" className="text-indigo-600 hover:underline font-medium">面试准备</a>；还没找到机会的话，先看<a href="/zh/blog/gaozhong-shixi-ruhe-xunzhao" className="text-indigo-600 hover:underline font-medium">高中生实习完整指南</a>。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">高中生简历的基本结构</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          一份有效的实习简历应包含以下几个模块，按重要性排列：
        </p>
        <ul className="space-y-3 mb-6">
          <Check><strong>联系方式</strong>——姓名、专业邮箱、手机号。使用正式的邮件地址（firstname.lastname@gmail.com），而非昵称邮箱。</Check>
          <Check><strong>个人简介（可选）</strong>——2-3句话，说明你是谁、正在寻找什么类型的机会，以及你能为雇主带来什么。</Check>
          <Check><strong>教育背景</strong>——学校名称、年级/毕业年份、GPA或主要科目成绩（如果优秀的话）。</Check>
          <Check><strong>技能</strong>——技术技能（软件、编程语言、语言能力）。使用具体名称而非笼统描述。</Check>
          <Check><strong>项目与活动</strong>——课外活动、学生组织、志愿服务、个人项目。</Check>
          <Check><strong>证书与荣誉</strong>——竞赛奖项、在线课程证书、评估报告等。</Check>
        </ul>
        <Callout>
          <strong className="text-indigo-900">黄金法则：</strong>严格控制在一页以内。内容密度低但清晰的一页，远优于塞满内容的一页半。空白是设计工具，不是需要填满的空间。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">没有工作经验时写什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          "没有经验"是一个误区。你可能没有正式工作经历，但你有比你意识到的更多可以展示的内容：
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>担任过实质性职责的角色</strong>——班长、社团干部、学生会成员、运动队队长。写明你的职责，而非仅仅是头衔。</Bullet>
          <Bullet><strong>个人项目</strong>——自学编程并做了一个小工具？为学校活动制作了宣传设计？这些都是项目，请写进去。</Bullet>
          <Bullet><strong>志愿服务</strong>——如果有实质性职责（不只是"帮忙"），注明你具体做了什么、服务了多少人或达成了什么结果。</Bullet>
          <Bullet><strong>竞赛参与</strong>——学科竞赛、黑客马拉松、创业大赛，即使未获奖，参与本身也证明了主动性。</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">用行动动词让描述更有力</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          简历中最常见的弱点之一是被动和模糊的描述。把"负责社交媒体"改成"管理学校官方微信公众号，粉丝增长至3,200人"。把"参与了项目"改成"独立完成数据清洗模块，缩短数据处理时间30%"。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          优秀的行动动词包括：主导、开发、创建、分析、协调、设计、提升、实施、推出、撰写。每条经历用一到两个具体动词开头，后跟可量化的结果（如果有的话）。
        </p>
        <Callout>
          <strong className="text-indigo-900">评估分数的用法：</strong>如果你完成了Eduentry实习准备评估，可以在"证书"部分这样写：「Eduentry实习准备评估 — 数字营销方向，准备级别：[你的级别]（2026年）」。这为招聘官提供了第三方的客观能力参考。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">最常见的简历错误</h2>
        <ul className="space-y-3 mb-4">
          <Bullet><strong>使用通用模板照搬</strong>——招聘官见过太多相同格式，个性化的设计更令人印象深刻。</Bullet>
          <Bullet><strong>拼写或语法错误</strong>——仔细检查，并让别人帮你校对。一个错别字可能直接导致淘汰。</Bullet>
          <Bullet><strong>使用"responsible for"（负责……）开头</strong>——改用主动动词，展示你做了什么，而非你的职责范围。</Bullet>
          <Bullet><strong>联系邮箱不专业</strong>——确保邮箱地址正式，最好是"姓名+数字"格式。</Bullet>
        </ul>
      </section>
    </>
  ),

  'shixi-mianshi-zhunbei-jiqiao': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        面试焦虑是正常的——对任何年龄的人都是如此。但大多数面试失败不是因为焦虑，而是因为准备不足。面试前，先确认你的<a href="/zh/blog/shixi-jianlixie-zhinan" className="text-indigo-600 hover:underline font-medium">实习简历</a>已经就绪——面试官通常会在谈话中参考你的简历。对于实习面试来说，招聘官的期望值本来就不高：他们招的是学生，不是职场老手。你真正需要的是展示好奇心、准备充分，以及基本的专业意识。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">面试前的准备清单</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>研究公司</strong>——了解他们做什么、他们的主要产品或服务、最近有什么新闻，以及你对哪个项目或方向感兴趣。这5分钟的研究在面试中价值巨大。</Check>
          <Check><strong>练习高声回答</strong>——在心里想答案和真正说出来感觉完全不同。至少对着镜子或对家人练习三到五遍。</Check>
          <Check><strong>准备2-3个问题</strong>——"面试结束时你有什么问题吗？"——这是测试你是否真正感兴趣的机会。好问题例子：「实习生通常会参与哪些实际项目？」「这个岗位最成功的实习生通常有哪些特质？」</Check>
          <Check><strong>确认细节</strong>——地点（或视频链接）、时间、面试官姓名。提前10分钟到达现场，或提前测试视频设备。</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">最常见的面试问题及回答思路</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>「请介绍一下你自己。」</strong>——不要从出生地或小学开始说。结构：我是谁（学校、年级）→ 我的兴趣和技能 → 为什么我对这个实习感兴趣。控制在60-90秒。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>「你的优势是什么？」</strong>——选1-2个与实习直接相关的优势，并用具体例子说明，而非自我标榜。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>「你的待提升之处是什么？」</strong>——诚实说一个真实的弱点，但随即说明你正在如何改进。避免伪装成优点的答案（"我太完美主义了"）。
        </p>
        <Callout>
          <strong className="text-indigo-900">STAR方法：</strong>回答行为类问题（「举例说明你解决过的一个困难」）时，用情境（Situation）→ 任务（Task）→ 行动（Action）→ 结果（Result）的框架组织答案。即使例子来自学校项目，这个框架也能让回答听起来清晰、有力。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">着装与仪态建议</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大多数实习面试场合，商务休闲装（Business Casual）是最稳妥的选择：整洁的裤子或裙子、衬衫或上衣、正式鞋。避免破洞牛仔裤、帽衫和运动装。有疑问时宁可正式一点。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          视频面试时，额外注意：背景干净整洁、光线从正面打（避免逆光）、摄像头与眼睛平齐、音频测试无回声。这些细节展示了你的专业意识。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">面试后该做什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          面试结束后24小时内发送感谢邮件。内容简短：感谢对方时间，提到面试中令你印象深刻的一点（具体说明），并重申你的热情。这一步骤90%的申请者都会跳过——这正是你的机会。如果还在寻找合适机会，参考<a href="/zh/blog/gaozhong-shixi-ruhe-xunzhao" className="text-indigo-600 hover:underline font-medium">高中生实习完整指南</a>了解最有效的寻找渠道。
        </p>
      </section>
    </>
  ),

  'shuzi-yingxiao-shixi-rumen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        数字营销是高中生最容易进入的热门职业领域之一。原因很简单：大多数数字营销技能不需要专业学历，只需要创造力、数据好奇心和基本的互联网直觉——而这些是很多高中生天然就有的。对于想在15-18岁积累真实职业经验的学生来说，这个领域提供了极佳的切入点。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">数字营销实习中你会做什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          与普遍认知不同，数字营销实习生通常不只是"转发帖子"。一个设计良好的实习项目会让你接触多个真实工作流程：
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>内容创作</strong>——为微信公众号、微博、小红书或Instagram撰写和排版内容，理解不同平台的语气和格式差异。</Bullet>
          <Bullet><strong>数据分析</strong>——使用Google Analytics或平台自带的数据后台，查看哪些内容表现更好、为什么，并提出改进建议。</Bullet>
          <Bullet><strong>SEO调研</strong>——研究关键词、分析竞争对手的内容策略，了解搜索引擎如何决定内容排名。</Bullet>
          <Bullet><strong>邮件营销</strong>——协助撰写营销邮件、测试不同标题的打开率，学习如何用数据优化沟通效果。</Bullet>
          <Bullet><strong>竞品分析</strong>——系统整理竞争对手的营销策略，为团队的决策提供依据。</Bullet>
        </ul>
        <Callout>
          <strong className="text-indigo-900">行业现实：</strong>根据LinkedIn的数据，数字营销是2024-2025年增长最快的职位类别之一，需求远超供给。在高中阶段建立这方面的经验，相当于在人才竞争真正开始前就建立了优势。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">你需要具备哪些基础能力</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          数字营销的门槛比多数人想象的低，但有几个基础能力能让你在申请时更有竞争力：
        </p>
        <ul className="space-y-3 mb-6">
          <Check><strong>清晰的书面表达</strong>——营销本质上是沟通。能够写出简洁、有说服力的文字，是这个领域最核心的能力。</Check>
          <Check><strong>社交媒体直觉</strong>——对不同平台的受众、格式和语气有直观感知。这不是天赋，是主动观察养成的习惯。</Check>
          <Check><strong>数据意识</strong>——不需要会统计，但需要对数字有基本的好奇心：为什么这条帖子的转发量是那条的三倍？</Check>
          <Check><strong>基础工具使用</strong>——Canva（视觉设计）、Google Docs/表格、任何一个社交平台的后台数据工具。这些可以在1-2周内自学。</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">在哪里找数字营销实习机会</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          数字营销实习的最佳机会通常不在大公司的官方招聘页面上，而在：
        </p>
        <ul className="space-y-3 mb-4">
          <Bullet><strong>本地初创公司和数字代理公司</strong>——他们资源有限，最需要有动力的实习生，也最愿意给实习生真实的责任。</Bullet>
          <Bullet><strong>直接邮件申请</strong>——找到你感兴趣的公司的市场/运营部门负责人，发一封简短、个性化的邮件。说明你注意到了他们的哪个具体内容，以及你能如何贡献。</Bullet>
          <Bullet><strong>学校或社区组织</strong>——帮助学校活动、非盈利机构或本地商户管理社交媒体，积累有据可查的实战经验。</Bullet>
          <Bullet><strong>招聘平台</strong>——领英、智联招聘、Boss直聘都有实习岗位，但竞争更激烈，通常需要简历和求职信。</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          申请前，准备好你的<a href="/zh/blog/shixi-jianlixie-zhinan" className="text-indigo-600 hover:underline font-medium">实习简历</a>，并了解<a href="/zh/blog/shixi-mianshi-zhunbei-jiqiao" className="text-indigo-600 hover:underline font-medium">面试准备技巧</a>——数字营销面试通常会测试你对具体平台和数据的理解。
        </p>
      </section>
    </>
  ),

  'shuju-fenxi-shixi-gaoxiaosheng': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        数据分析正在成为21世纪最普遍需要的工作技能之一——不只是在科技公司，而是在医疗、零售、金融、教育、政府几乎每个领域。对于一个有分析思维的高中生来说，这是一个极为有价值的方向：门槛相对较低，学习路径清晰，而市场需求持续增长。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">数据分析师实际上在做什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          在实习层面，数据分析的工作通常包括：
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>数据清洗</strong>——将杂乱、不一致的原始数据整理成可用格式。这是数据分析80%的实际工作内容，也是入门最容易学的技能。</Bullet>
          <Bullet><strong>数据可视化</strong>——用图表、仪表盘展示数据规律，让非技术人员也能理解。常用工具：Excel、Google表格、Tableau（免费版）。</Bullet>
          <Bullet><strong>报告撰写</strong>——将数据分析结果转化为清晰的书面结论和建议。这需要结合分析能力和沟通能力。</Bullet>
          <Bullet><strong>数据收集</strong>——设计调查问卷、整理数据库、从网站或API获取数据（入门级）。</Bullet>
        </ul>
        <Callout>
          <strong className="text-indigo-900">市场数据：</strong>世界经济论坛《未来就业报告》将数据分析师列为未来五年需求增长最快的职位之一。现在开始建立这项技能，意味着你在这个浪潮真正到来之前就已经站在浪尖。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">高中生需要学习哪些工具</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          按优先级排列，高中生应该依次学习：
        </p>
        <ul className="space-y-3 mb-6">
          <Check><strong>Excel / Google表格</strong>——数据透视表、VLOOKUP、基本函数。这是数据分析的基础，也是大多数实习中实际使用的工具。自学时间：1-2周。</Check>
          <Check><strong>Python基础</strong>——Pandas库用于数据处理，Matplotlib用于可视化。Kaggle Learn提供免费的入门课程，5天可完成基础部分。</Check>
          <Check><strong>SQL基础</strong>——查询数据库是数据分析师最频繁的操作。MODE Analytics和SQLZoo提供免费练习平台，入门只需2-3天。</Check>
          <Check><strong>Tableau或Power BI</strong>——数据可视化工具，有免费版本。这是一个加分项，在申请时能立即展示可见成果。</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何在没有经验的情况下展示数据能力</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          对于高中生来说，关键是用你已有的材料展示分析思维：
        </p>
        <ul className="space-y-3 mb-4">
          <Bullet>用Excel分析你喜欢的体育项目或游戏的统计数据，制作一份可视化报告，放到GitHub或个人网页上。</Bullet>
          <Bullet>完成Kaggle上的入门比赛，将你的代码和分析过程记录下来。</Bullet>
          <Bullet>为学校活动、社团或班级设计一个小型数据收集项目（问卷+分析报告）。</Bullet>
          <Bullet>将Eduentry评估结果加入简历——它包含你在定量推理和分析思维方向的客观测评数据。</Bullet>
        </ul>
      </section>
    </>
  ),

  'ruhe-zai-15-sui-tuocying': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        15岁是一个奇特的年龄：你已经足够成熟，可以开始做那些在职业和学业上真正有分量的事情；但大多数同龄人还没有意识到这一点。这个认知差距就是你的优势。如果你现在开始，等到大学申请或求职时，你将面对的不只是比你成绩好一点的人——而是几乎所有人都没有你的经历深度。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">为什么15岁是最佳起点</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          发展心理学研究表明，青少年时期是身份认同形成最活跃的阶段。在这一时期接触真实的职业世界，能够加速自我认知的发展——你更快地知道自己擅长什么、对什么有真实兴趣，而不是依赖假设。
        </p>
        <Callout>
          <strong className="text-indigo-900">研究数据：</strong>英国Education and Employers的研究显示，在16岁前有4次以上雇主接触经历的青少年，到19岁成为NEET（未接受教育、就业或培训）的风险降低5倍。这不是小幅改善，而是量级差异。
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          15岁开始的另一个实际优势是时间。你有2-3年的时间，可以先做一次普通实习，反思经历，调整方向，再做一次更好的实习——到提交大学申请时，你已经有了完整的成长轨迹，而不只是一个孤立的经历。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">最有含金量的四类活动</h2>
        <ul className="space-y-4 mb-6">
          <Check><strong>工作经验或实习</strong>——即使是2周的观察实习也比任何课外活动更有说服力。它证明你能在非学校环境中运作，与真实的成年人合作，并处理真实的责任。</Check>
          <Check><strong>有实质责任的领导角色</strong>——不只是"成员"，而是有决策权、要承担结果的角色：社团主席、学校刊物主编、竞赛队队长。</Check>
          <Check><strong>可展示的技术项目</strong>——一个有GitHub链接的代码项目、一份有数据支撑的研究报告、一个有真实用户的产品——比任何证书更有说服力。</Check>
          <Check><strong>竞赛经历</strong>——学科奥林匹克、编程竞赛、商业计划书比赛。重要的不只是获奖，而是参与本身展示了主动性和对该领域的真实投入。</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何在没有人脉的情况下找到第一份实习</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          大多数15岁的学生认为找实习需要父母的关系网络。这是一个可以打破的限制：
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>直接邮件</strong>——找到你感兴趣的本地中小企业的负责人或HR邮箱，发一封简短、个性化的邮件。说明你是谁、你为什么对他们的业务感兴趣，以及你能做什么。中小企业对这类邮件的回应率远超大公司。</Bullet>
          <Bullet><strong>学校渠道</strong>——班主任、职业顾问或某些科目老师往往有你不知道的资源和联系人。直接去问。</Bullet>
          <Bullet><strong>线上实习平台</strong>——Springpod、Virtual Work Experience等平台提供远程工作体验项目，无需地理位置，且专门面向学生。</Bullet>
          <Bullet><strong>从身边的小项目开始</strong>——帮助家族朋友的小生意做社交媒体、为邻居设计一个简单的网站。这些经历如果有可量化的结果，也可以写进简历。</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">评估分数如何解决可信度问题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          15岁申请实习面临一个根本性的挑战：你的简历很薄，而招聘官无法确认你是否真的有能力。Eduentry这类评估工具的作用正在于此——它提供了第三方的客观数据，展示你在逻辑推理、领域知识和职业情境判断上的实际水平，填补了"没有工作经验"留下的信任空白。
        </p>
      </section>
    </>
  ),

  'ruhe-zhaodao-shixi-mei-you-guanxi': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        大多数关于找实习的建议都是写给有人脉、有推荐人、有校友网络的大学生的。如果你是没有任何背景的高中生——这些建议对你几乎没用。这篇文章讲的是真正有效的方法。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">为什么没有人脉并不是你想象的那么大的障碍</h2>
        <p className="text-gray-700 leading-relaxed mb-4">大多数面向高中生的实习机会根本不通过正式招聘渠道发布。它们通过直接联系填补——有人主动写信，刚好碰上公司需要帮手。中小企业尤其如此：老板自己做决定，不需要走流程，如果你的信让他们觉得你有用，他们就会回复。</p>
        <Callout><strong className="text-indigo-900">核心思路：</strong>不要找已有的实习岗位——去创造机会。写给你感兴趣的公司，哪怕他们没有发布任何招募信息。</Callout>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">具体渠道：从哪里找</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>Boss直聘和智联招聘</strong>——搜索"实习"，不限学历。很多岗位没有年龄要求，高中生申请完全可以。</Check>
          <Check><strong>微信和微博行业社群</strong>——加入你感兴趣行业的社群，里面经常有人发实习信息，而且竞争比大平台少得多。</Check>
          <Check><strong>本地小公司</strong>——本地创业公司、设计工作室、营销公司。直接发邮件或打电话，决策者就是老板本人。</Check>
          <Check><strong>学校就业指导老师</strong>——他们通常有一批合作企业的联系方式，很多高中生根本不知道可以去问。</Check>
          <Check><strong>冷邮件直接联系</strong>——挑选30家你感兴趣的公司，找到相关负责人的联系方式，发个性化邮件。这是成功率最高但最少人用的方法。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">一封有效的冷邮件长什么样</h2>
        <ul className="space-y-3 mb-4">
          <Bullet><strong>第一句</strong>——关于这家公司的具体观察，证明你真的做了功课："我看到你们最近发布的数据报告，分析框架很有意思。"</Bullet>
          <Bullet><strong>一句介绍</strong>——你是谁，读几年级，对什么方向感兴趣。</Bullet>
          <Bullet><strong>你能提供什么</strong>——具体的、不是"我想积累经验"：例如"我会用Python整理数据"或"我擅长写小红书内容"。</Bullet>
          <Bullet><strong>请求</strong>——不是直接要职位，而是请求一次短暂通话："方便抽15分钟聊聊吗？"这比要求对方做决定要容易得多。</Bullet>
        </ul>
      </section>
    </>
  ),

  'shixi-qiuzhixin-xiezuo-zhinan': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        大多数实习求职信被忽略——不是因为申请者不够优秀，而是因为信写得太像模板。招聘者一眼就能看出哪封信是专门写给他们的，哪封只是复制粘贴。这篇文章告诉你如何写出那种让人读完的信。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">三段结构：简洁有效</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>第一段——钩子和背景</strong>：从这家公司的具体细节开始，然后一句话介绍自己。"我关注到你们最近的XX项目——这个方向正好是我在认真研究的。我是XX学校高三学生，正在寻找数据分析方向的实习机会。"</Check>
          <Check><strong>第二段——你能提供什么</strong>：不是罗列你的经历，而是说明你能帮到他们什么。用一个具体例子：一个学校项目、一项技能、一段自学经历。</Check>
          <Check><strong>第三段——明确的下一步</strong>："期待在下周进行一次15分钟的简短通话，请问周二或周三您是否方便？"这比"期待您的回复"具体得多，让对方更容易回应。</Check>
        </ul>
        <Callout><strong className="text-indigo-900">长度：</strong>200-250字最合适。简洁是对对方时间的尊重，也是你表达能力的证明。</Callout>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">会让信失效的常见错误</h2>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>"我想积累工作经验"</strong>——这是在要求对方给你好处。改成你能为他们做什么。</Bullet>
          <Bullet><strong>"我责任心强、沟通能力好"</strong>——没有例子的形容词没有说服力。用事实代替。</Bullet>
          <Bullet><strong>发给所有公司同一封信</strong>——招聘者能立刻察觉。至少第一段要专门写给这家公司。</Bullet>
          <Bullet><strong>没有明确的行动号召</strong>——结尾不提下一步，对方就很容易把信搁置不回复。</Bullet>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">用客观数据加强说服力</h2>
        <p className="text-gray-700 leading-relaxed mb-4">在信中加入一条可量化的内容会让你脱颖而出。例如："我完成了Eduentry的实习准备评估，在数字营销方向获得了[级别]结果。"这比"我对数字营销很感兴趣"具体得多，也更难被质疑。</p>
      </section>
    </>
  ),

  'yuancheng-zaixian-shixi-zhinan': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        远程实习打破了地理限制——你可以在上海的家里为北京、深圳甚至海外的公司完成真实工作。对于高中生来说，这意味着更多的选择，更灵活的时间，以及打破城市局限的机会。但远程实习和在线课程之间的区别，很多人并不清楚。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">怎么判断是真正的实习还是伪装的课程</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>真实任务有截止日期</strong>——你的工作成果被实际使用，不是练习题。</Check>
          <Check><strong>有具体的导师</strong>——一个真实的人给你任务、检查结果、提供反馈。不是自动邮件或通用答疑。</Check>
          <Check><strong>结束后可以拿到推荐信</strong>——如果对方说"我们不提供推荐信"，这通常意味着没有真正的工作关系。</Check>
          <Check><strong>你的贡献有记录</strong>——能够描述你做了什么、产出了什么，这是大学申请时最有说服力的材料。</Check>
        </ul>
        <Callout><strong className="text-indigo-900">申请前直接问：</strong>"实习期间我会参与哪些具体项目？完成后是否可以获得推荐信？"模糊的回答是警示信号。</Callout>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">最适合远程完成的方向</h2>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>数字营销</strong>——内容创作、社交媒体运营、SEO分析，全部可以远程完成，结果也容易量化。</Bullet>
          <Bullet><strong>编程和IT</strong>——代码通过Git提交，结果完全数字化，是远程工作最成熟的领域。</Bullet>
          <Bullet><strong>数据分析</strong>——用Excel、Python或Google表格处理数据，完全不需要线下办公。</Bullet>
          <Bullet><strong>设计</strong>——Figma和Canva是云端工具，设计工作天然适合远程。</Bullet>
          <Bullet><strong>内容写作和翻译</strong>——交付方式简单，评价标准清晰。</Bullet>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">居家工作的自律技巧</h2>
        <p className="text-gray-700 leading-relaxed mb-4">没有办公室节奏的约束，自律成为最关键的职业技能：</p>
        <ul className="space-y-3 mb-4">
          <Bullet>提前与导师约定固定工作时段，像上班一样遵守。</Bullet>
          <Bullet>创建专属工作区域——哪怕只是桌子的一个固定角落。</Bullet>
          <Bullet>用Notion或Trello管理任务，每天结束时记录完成了什么。</Bullet>
          <Bullet>主动汇报进展，不要等对方问。这是远程工作中建立信任最快的方式。</Bullet>
        </ul>
      </section>
    </>
  ),

  'IT-keji-shixi-gaoxiao': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        很多高中生认为进入科技行业需要先会写代码。这个认知让很多本可以获得宝贵经验的学生望而却步。事实是：科技公司里有大量不需要编程的角色，而且这些角色对于了解科技行业同样有价值。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">不需要写代码也能做的科技类实习</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>用户研究（UX Research）</strong>——收集用户反馈、整理访谈记录、分析可用性问题。这是科技公司非常需要的工作，对沟通和分析能力要求高，对编程没有要求。</Check>
          <Check><strong>手动测试（QA）</strong>——按照测试用例检查产品功能，记录bug报告。几天内可以上手，公司非常需要。</Check>
          <Check><strong>内容运营</strong>——产品文案、帮助文档、社交媒体内容，这些在科技公司都是专门岗位。</Check>
          <Check><strong>数据整理和基础分析</strong>——用Excel或Google表格处理数据、制作图表，不需要写一行代码。</Check>
          <Check><strong>产品助理</strong>——整理用户反馈、参与产品讨论、协助竞品分析。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如果想学编程：从哪里开始</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Python是最好的起点：语法简洁、应用广泛（数据、自动化、AI），社区庞大。3-6个月的专注学习足以做出一个可以展示的项目。</p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>不要一开始就学多种语言</strong>——选一种，把它学到能做出真实项目为止。</Bullet>
          <Bullet><strong>做一个具体的项目</strong>——哪怕是一个简单的数据分析脚本或小工具，比完成十个课程更有说服力。</Bullet>
          <Bullet><strong>参加黑客松</strong>——在有限时间内完成一个真实项目，同时认识行业中的人。这是进入科技圈最有效的方式之一。</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">推荐资源：</strong>Kaggle Learn（数据分析，免费）、freeCodeCamp（网页开发，免费）、CS50（哈佛入门计算机课，免费）。</Callout>
      </section>
    </>
  ),

  'jinrong-shixi-rumen': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        金融行业看起来门槛很高——实际上对高中生来说，有几个切实可行的入口。关键是找对类型的公司和岗位，而不是直接冲大型投行。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">高中生能做的金融相关实习</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>会计师事务所的基础工作</strong>——数据录入、整理报表、核对数字。本地小型会计所比大型事务所更愿意接受高中生。</Check>
          <Check><strong>金融科技创业公司</strong>——任务多样、结构灵活，对学历没有严格要求。这是高中生进入金融行业最容易的路径之一。</Check>
          <Check><strong>本地银行或保险公司的行政辅助</strong>——处理文件、整理数据、客户服务支持。</Check>
          <Check><strong>个人理财内容创作</strong>——为金融自媒体或理财公司写文章、整理数据、制作图表。这条路适合有写作能力的同学。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">需要提前掌握的基础知识</h2>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>基本财务概念</strong>——收入、支出、利润、资产负债表。这些是所有金融工作的基础，网上有大量免费课程可以学。</Bullet>
          <Bullet><strong>Excel熟练使用</strong>——尤其是数据透视表和基本公式（SUM、VLOOKUP、IF）。这是金融行业最通用的基础工具。</Bullet>
          <Bullet><strong>养成读财经新闻的习惯</strong>——《第一财经》、《财新》或《华尔街见闻》，每天10分钟，半年后你会对市场有基本认知。</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">金融科技创业公司vs传统金融机构：</strong>对高中生来说，金融科技公司通常提供更多元的任务和更直接的反馈，是更好的学习环境。传统机构更规范，但进入门槛也更高。</Callout>
      </section>
    </>
  ),

  'sheji-chuangyi-shixi': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        设计类实习对高中生来说是门槛最低的专业方向之一——因为设计能力可以展示，而不只是声称。一个有质量的作品集，胜过一份再好看的简历。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">高中生可以做的设计类实习</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>平面设计助理</strong>——海报、社交媒体配图、宣传材料。很多公司有这类需求但没有专职设计师。</Check>
          <Check><strong>UI/UX研究辅助</strong>——整理用户调研数据、参与可用性测试、制作低保真原型。不需要很强的视觉设计能力，但需要细心和逻辑。</Check>
          <Check><strong>内容创作和视觉运营</strong>——短视频封面、图文排版、品牌视觉维护。这是新媒体公司和电商公司的常见需求。</Check>
          <Check><strong>品牌设计辅助</strong>——logo草图、配色方案、品牌手册整理。创业公司经常需要这类帮助。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">需要掌握的工具</h2>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>Canva</strong>——免费、上手快，适合大多数基础设计任务。学会Canva可以在一周内胜任很多初级设计工作。</Bullet>
          <Bullet><strong>Figma</strong>——UI/UX设计的行业标准，有免费版。学习曲线比较平缓，一个月可以掌握基础操作。</Bullet>
          <Bullet><strong>Adobe系列</strong>——Photoshop和Illustrator是进阶工具，高中阶段有基础认知即可，不需要精通。</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">没有作品怎么建作品集：</strong>给自己设计虚拟项目——为本地咖啡馆重设菜单、为学校社团做视觉形象、为想象中的App设计3个界面。这些虚构项目完全可以展示真实能力。</Callout>
      </section>
    </>
  ),

  'chuangye-gongsi-shixi': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        创业公司实习和大公司实习——对高中生来说，这两种体验差别很大。不是哪个更好，而是给你的东西完全不同。在做选择之前，先弄清楚你真正想要什么。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">创业公司实习给你什么</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>真实的任务，真实的影响</strong>——小团队没有多余的人手，你的工作会被真实使用，而不是放进文件夹。</Check>
          <Check><strong>更快的学习速度</strong>——没有完善的培训体系，你被迫独立解决问题。一个月的创业公司经历，学到的可能比三个月的大公司培训项目更多。</Check>
          <Check><strong>接触决策层</strong>——在小公司你很可能直接和创始人或高层互动，这对高中生来说是极为难得的视角。</Check>
          <Check><strong>更低的门槛</strong>——创业公司更愿意尝试，更灵活，不在乎你是高中生还是大学生。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何找到靠谱的创业公司</h2>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>36氪和创业邦</strong>——涵盖大量国内活跃创业公司，可以找到联系方式直接联系。</Bullet>
          <Bullet><strong>本地孵化器和科技园</strong>——他们认识园区内的所有创业团队，可以直接联系孵化器寻求对接。</Bullet>
          <Bullet><strong>微信行业群</strong>——很多创始人活跃在垂直行业的微信群里，这是建立直接联系的好渠道。</Bullet>
          <Bullet><strong>直接发邮件给创始人</strong>——在LinkedIn或公司官网找到联系方式，发一封简洁的个性化邮件。创始人通常比HR更快回复。</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">红色警示：</strong>如果对方无法清楚说明你将做什么具体工作，这不是真正的实习机会。在接受之前，要求对方给出具体的工作描述。</Callout>
      </section>
    </>
  ),

  'tuijianxin-zenme-yao': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        实习结束后，一封好的推荐信是比任何证书都更有价值的东西。它证明了一个真实的成年人愿意为你的能力和品格背书。但大多数高中生要么不敢开口，要么开口的方式让对方很难答应。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">向谁要，什么时候要</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>找直接导师，不是公司高管</strong>——亲眼见过你工作的人能写出具体的例子。泛泛的表扬来自不了解你的人，招生官和HR都能看出区别。</Check>
          <Check><strong>实习结束前2-3周提出请求</strong>——不要等到最后一天。给对方足够时间写出有质量的内容。</Check>
          <Check><strong>实习结束后1-2个月内仍然可以联系</strong>——时间越长，对方对具体工作细节的记忆越模糊，信的质量会下降。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何开口才不显得唐突</h2>
        <p className="text-gray-700 leading-relaxed mb-4">关键是让你的请求具体且容易说"是"：</p>
        <ul className="space-y-3 mb-6">
          <Bullet>提醒对方你参与过的具体项目，让他们有内容可写。</Bullet>
          <Bullet>说明用途："我在准备大学申请/下一段实习申请"。</Bullet>
          <Bullet>主动提供帮助："我可以发给您我们做过的项目要点，方便您参考。"</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">示例：</strong>"我在实习期间负责的XX项目让我收获很多。我正在准备大学申请，如果您方便的话，能否为我写一封简短的推荐信？我可以把项目的主要内容整理成要点发给您，节省您的时间。"</Callout>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">一封好推荐信包含什么</h2>
        <ul className="space-y-3 mb-4">
          <Bullet>具体项目和你的贡献，不是泛泛的夸奖。</Bullet>
          <Bullet>你展现的1-2个核心优势，附带真实例子。</Bullet>
          <Bullet>作者对你未来潜力的明确判断。</Bullet>
        </ul>
      </section>
    </>
  ),

  'shixi-di-yi-tian': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        实习第一天是你在职场上的第一次亮相。从这一天起，同事和导师对你的印象开始形成，而第一印象改变起来很慢。好消息是：做对几件简单的事，就能让开头比大多数人好。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">第一天之前要做的准备</h2>
        <ul className="space-y-3 mb-6">
          <Check>确认地址、开始时间和联系人——不要等对方提醒。</Check>
          <Check>如果是远程实习，提前测试摄像头、麦克风和所有需要的软件账号。</Check>
          <Check>花20分钟看一遍公司官网和最近的新闻——这让你在对话中立刻有话说。</Check>
          <Check>提前10分钟到达（或上线）——"准时"在第一天意味着"已经迟了"。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">第一天的正确姿态</h2>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>多观察，少评论</strong>——先理解这里的工作方式和文化，再发表意见。改进建议在熟悉之后才有意义。</Bullet>
          <Bullet><strong>问有质量的问题</strong>——帮助你完成任务的问题是好问题；自己查一下就能知道答案的问题显示你不够主动。</Bullet>
          <Bullet><strong>记住同事的名字</strong>——在对话中使用他们的名字，这是建立关系最简单的方式。</Bullet>
          <Bullet><strong>按时完成被分配的任务</strong>——哪怕任务很小，准时交付建立信任。如果有延误，提前说明，不要等对方来问。</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">第一天犯错了怎么办：</strong>立刻承认，提出解决方案。"我在这里算错了，我已经修正了，这是新版本。"处理错误的方式展示了你的专业成熟度。</Callout>
      </section>
    </>
  ),

  'shixi-vs-jianzhang': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        实习和兼职都能让高中生积累工作经验，但它们给你的东西完全不同。在时间有限的情况下，选择哪一个应该基于你真正想要的结果，而不是哪个更容易找到。
      </p>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">核心差别</h2>
        <ul className="space-y-3 mb-6">
          <Check><strong>实习</strong>——专业技能积累、职业方向探索、大学申请材料、行业人脉建立。通常无薪或低薪，但长期回报更高。</Check>
          <Check><strong>兼职</strong>——即时收入、时间管理能力、责任感、服务意识。培养的是通用职业素养，而非专业技能。</Check>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">什么情况下选实习</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>你对某个具体行业或职业方向有明确兴趣，想要探索或确认它。</Bullet>
          <Bullet>你在准备大学申请，需要有针对性的经历来支撑你的目标专业。</Bullet>
          <Bullet>你有充足的时间（假期），可以集中投入一段有深度的工作经历。</Bullet>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">什么情况下选兼职</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>你需要收入，经济上有实际需要。</Bullet>
          <Bullet>你对职业方向还没有清晰想法，先积累工作感觉再说。</Bullet>
          <Bullet>学业压力大，需要更灵活的时间安排。</Bullet>
        </ul>
        <Callout><strong className="text-indigo-900">最优策略：</strong>假期做实习，学期中视情况做少量兼职。这样既有深度的职业经历，也不会在学业最忙的时候过度分心。</Callout>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">对大学申请的影响</h2>
        <p className="text-gray-700 leading-relaxed mb-4">如果你的目标是申请有竞争力的本科或研究生项目，与目标专业相关的实习经历远比兼职更有说服力。招生官能区分"我在咖啡店打过工"和"我在数据公司完成了一个实际分析项目"的分量差别。两者都是经历，但它们传递的信号不同。</p>
      </section>
    </>
  ),

  'pisa-shi-shenme-2025-chengji-yu-zhiye-fazhan': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        从事教育工作二十余年，我见过无数家长关注孩子的学校成绩，却很少有人真正了解孩子在全球同龄人中处于什么位置。每次PISA结果发布，总有一种复杂的感受：数据令人警醒，但它揭示的现实，远比一张排行榜更值得认真对待。这篇文章不是为了制造焦虑，而是为了帮助您看清楚真正重要的事情。
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        作为一名教育者，我有责任诚实地说：PISA所衡量的能力与孩子们走入真实世界时的准备程度之间，仍然存在一道不容忽视的鸿沟。认识这道鸿沟，是弥合它的第一步。
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA是什么？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA是<em>Programme for International Student Assessment</em>（国际学生评估项目）的缩写，由经合组织（OECD）主导，每三年在91个国家和地区对15岁学生进行一次大规模评估。参与人数超过69万名青少年，涵盖数学、阅读和科学三大核心领域。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA与普通考试的本质区别在于：它评估的不是学生<em>记住了什么</em>，而是他们能否将所学知识<strong>应用于真实情境</strong>。一道数学题不会直接考公式，而是问你如何规划一份购物清单最省钱；一道阅读题不考背诵，而是让你判断一篇新闻报道中科学论断的可靠性。这正是PISA最有价值的地方——也是最令教育者深思的地方。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          2025年，PISA新增了计算问题解决能力（Computational Problem Solving）测试，正式将数字时代最核心的技能纳入评估体系。这一变化绝非偶然——在人工智能深度融入工作场所的今天，算法思维已经成为基础素养的一部分。
        </p>
        <Callout>
          <strong className="text-indigo-900">重要说明：</strong>PISA不是针对个别学生的竞赛。没有任何一个孩子会"参加PISA"并获得个人排名。它通过代表性抽样来评估各国教育系统的整体水平。但这并不意味着结果与您的孩子无关——恰恰相反。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA 2025是什么？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA 2025是最新一轮评估周期，学生于2024–2025学年参加测试，结果于2026年正式发布。这是迄今为止规模最大、覆盖最广的一轮PISA评估。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          主要发现包括以下几点：
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>经合组织平均分持续下滑。</strong>阅读和数学均分较历史高点明显回落，延续了自2018年以来的下降趋势。</Bullet>
          <Bullet><strong>东亚教育体系一枝独秀。</strong>新加坡（数学575分）、日本、韩国持续领跑。与经合组织平均水平之间的差距进一步扩大。</Bullet>
          <Bullet><strong>计算问题解决能力首次纳入评估。</strong>各国在这一新增维度上的差距显著，揭示了数字经济时代的教育准备程度鸿沟。</Bullet>
          <Bullet><strong>学习态度数据令人深思。</strong>超过四分之一的学生表示"学校为我进入成人世界所做的准备很少"。这不仅是一个数字，更是一个系统信号。</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          对于在国际化环境中成长的孩子的家庭而言，这些数据指向一个核心问题：您的孩子掌握的，是应对未来真实挑战所需的能力，还是仅仅擅长应试？
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA 2026存在吗？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          不存在。这是一个非常普遍的误解，值得直接澄清。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA每<strong>三年</strong>举行一次。完整的时间线是：PISA 2022 → PISA 2025 → PISA 2028。很多人搜索"PISA 2026"，是因为PISA 2025的结果恰好在2026年对外发布，造成了名称上的混淆。2026年发布的内容，是PISA 2025的数据，而不是一个新的评估周期。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          下一轮评估将是<strong>PISA 2028</strong>，预计结果于2029年公布。今天还在读高中的学生，将不会再参与PISA评估——这也意味着，当下的准备窗口比很多家长意识到的更加有限。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">PISA与职业成功：比你想象的更深的关联</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          有人会说：PISA不过是一场考试，与孩子未来的职业成功关系不大。我理解这种直觉，但数据告诉我们一个更复杂的故事。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          关联不是直接的——PISA高分不等于职业保障。但请仔细看PISA实际在测量什么：<em>将知识应用于真实情境的能力、理解并分析复杂文本、在模糊条件下进行数学推理。</em>再看雇主最看重的核心技能：分析思维、复杂信息处理、在不确定环境中做决策。两份清单，高度重叠。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          经合组织的长期追踪研究一致表明：PISA分数较高的国家，个人生产力、平均薪资和劳动力市场融入程度也更高。这是相关性，但绝非偶然——因为PISA衡量的，正是现代职场真正需要的底层能力。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA设定的<strong>第二级（Level 2）</strong>是最低能力基准，定义为：学生能够在无直接指导的情况下，识别并将一个简单情境用数学方式表达和解释。请想象一下：一个需要核对预算、阅读合同、与客户沟通的年轻人，仅靠这个最低水平根本无法应对职场的基本要求。现实的工作环境很快就会超越Level 2的边界。
        </p>
        <Callout>
          <strong className="text-indigo-900">教育者注记：</strong>PISA 2025将计算问题解决能力纳入评估，是一个重要信号。在人工智能重塑各行各业的时代，算法逻辑、数字推理和数据判断能力已成为基础素养。那些在这一维度落后于经合组织平均水平的国家，面临的不仅是教育差距，更是未来十年劳动力竞争力的结构性挑战。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">真正令我担忧的是什么</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          数据本身并不令人担忧——令我担忧的是数据背后的含义。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          在经合组织层面，约有<strong>35%的学生在数学上未能达到Level 2最低能力基准</strong>。这意味着超过三分之一的15岁学生，无法在没有明确指导的情况下处理基本的数学情境——而这正是几乎所有职业都会要求的能力。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          与此同时，达到最高水平（Level 5或6）的学生仅占约<strong>8%</strong>。这个数字意味着，在全球劳动力市场上真正具备顶尖竞争力的年轻人，远比我们以为的稀少。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          但令我最感忧虑的，不是这些统计数字本身，而是一个更基本的现象：学校里的知识与真实世界对这些知识的应用之间，存在一道持续扩大的鸿沟。孩子们能记住公式，却不一定能用公式解决问题；能通过考试，却在面对模糊的现实情境时手足无措。PISA的设计初衷，正是要测量这道鸿沟。而结果告诉我们，它依然存在。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如果您的孩子参加了PISA，会在全球排名中处于什么位置？</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA不测试个别学生——它通过具有代表性的样本来评估教育系统。这意味着您的孩子永远不会得到一个"官方PISA分数"。但这个问题依然可以被回答：<em>如果参加了，他们会在91个国家的690,000名同龄人中处于什么位置？</em>
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          要回答这个问题，需要一个基于相同方法论的评估——<strong>项目反应理论（IRT）</strong>。IRT是一种自适应测量系统，根据学生的实时作答动态调整题目难度。PISA采用IRT的原因在于：它能够在同一个量表上精确定位能力极强和极弱的学生，而不会因为题目太难或太简单而失去测量精度。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry的学业评估正是建立在这一方法论之上。它为6至17岁的孩子提供数学、阅读理解和逻辑推理方面的自适应题目，最终生成与PISA国际量表对齐的标准化分数。这个分数反映的，不是孩子在班级里的位置，而是在全球分布中的坐标。
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">如何解读分数：</strong>100分代表国际平均水平；115分约处于全球前16%；130分约处于全球前2%。一个在本地学校表现"良好"的孩子，在国际量表上可能处于非常不同的位置——而这两种信息所揭示的，是完全不同的两幅图景。
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          我认为每一位家长都有权至少问一次这个问题。成绩单告诉您孩子在班级里的位置；这项评估告诉您孩子在世界上的位置。这两幅图景，并不总是讲述同一个故事。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          评估全程约20-30分钟，完全免费，无需注册账号即可开始。结果即时呈现，包含各科目的详细子分数和全球百分位对比。
        </p>
        <div className="mt-6 mb-2">
          <a href="/zh#xueshu-pinggu" className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#4338CA] transition-colors">
            免费了解孩子的全球位置
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">如何培养PISA所衡量的能力</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          我常对家长说：培养PISA所测量的能力，不需要去刷PISA题库。PISA衡量的核心能力——将知识应用于真实情境、批判性阅读、在不确定条件下解决问题——只能在真实的情境中生长。而这类情境中，最有效的一种，是工作经历。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          当一个高中生在真实的工作环境中实习时，会发生什么？他面对的是没有标准答案的任务——这正是PISA问题解决能力考察的核心。他需要阅读并理解真实的工作文件——阅读理解能力在实践中得到锻炼。他需要分析数据、制作报告——数学推理在有意义的情境下变得鲜活。他需要与团队协作、应对意外——这些都是课堂无法完全复制的真实训练场。
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>阅读理解</strong> — 准确理解客户邮件、提炼报告要点。课堂上学习，职场中深化。</Bullet>
          <Bullet><strong>数学推理</strong> — 预算核算、数据解读、成本分析。数字在真实决策中才有重量。</Bullet>
          <Bullet><strong>问题解决</strong> — 面对模糊指令、产生备选方案、处理突发情况。只有在结果真实存在的环境中才能真正练习。</Bullet>
          <Bullet><strong>计算思维</strong> — 数据阅读、流程设计、理解数字工具的逻辑。这是PISA 2025新增的维度，也是雇主需求增长最快的能力。</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          这正是PISA成绩与职业成功之间深层联系的本质：两者都需要同一套底层能力，而培养这套能力最有效的途径，是让孩子在真实的工作场景中实践。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          如果您想了解适合高中生的实习机会，可以参考我们的<a href="/zh/shixi" className="text-indigo-600 hover:text-indigo-800 underline">高中生实习完整指南</a>——从如何寻找机会到如何在没有经验的情况下脱颖而出，都有详细介绍。
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">实践建议：</strong>培养PISA能力最直接的方法，是让孩子在高中阶段参与结构化的工作经历或实习项目。这不仅能将课堂知识置于真实情境，还能发展PISA难以直接测量、但职场高度重视的态度能力——主动性、适应力和协作精神。
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">结语</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PISA的数字是冷静的，但它们讲述的故事是真实的。每一个百分点背后，都是数以万计的年轻人——他们将面对求职、面试、职业选择，以及用所受教育应对真实世界挑战的时刻。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          如果您的孩子仍在高中阶段，这扇窗口还是开着的。不需要等到下一轮PISA，不需要等到大学申请季。从了解孩子真实的全球学业位置开始，从创造真实的应用情境开始，就是在做PISA最想看到的那件事：为孩子的未来打下真正扎实的基础。
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
