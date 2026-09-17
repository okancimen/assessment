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

  'shixi-jianlixie-zhinan': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        大多数高中生在写简历时犯同一个错误：试图"填满"页面，把每一行空白都塞进内容。招聘实习生的招聘官每天看几十份申请，他们需要的不是篇幅，而是清晰度和真实感。没有工作经验也能写出有说服力的简历——前提是你知道该展示什么。
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
        面试焦虑是正常的——对任何年龄的人都是如此。但大多数面试失败不是因为焦虑，而是因为准备不足。对于实习面试来说，招聘官的期望值本来就不高：他们招的是学生，不是职场老手。你真正需要的是展示好奇心、准备充分，以及基本的专业意识。
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
          面试结束后24小时内发送感谢邮件。内容简短：感谢对方时间，提到面试中令你印象深刻的一点（具体说明），并重申你的热情。这一步骤90%的申请者都会跳过——这正是你的机会。
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

}

export function getChineseBlogContent(slug: string): React.ReactNode {
  return ZH_CONTENT[slug] ?? (
    <p className="text-gray-600 leading-relaxed">
      文章内容即将上线。
    </p>
  )
}
