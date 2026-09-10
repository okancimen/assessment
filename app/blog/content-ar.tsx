import React from 'react'
import { Bullet, Callout, Check } from './blog-components'

export const AR_CONTENT: Record<string, React.ReactNode> = {

  'uae-cat4-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        اختبار CAT4 هو أحد أكثر أدوات التقييم المعرفي استخداماً في المدارس البريطانية والدولية في الإمارات العربية المتحدة. إذا كنت ولياً للأمر تفكر في تسجيل طفلك في إحدى هذه المدارس، أو طالباً يستعد لهذا الاختبار، فهذا الدليل يغطي كل ما تحتاج معرفته.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ما هو اختبار CAT4؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          اختبار CAT4 (اختبار القدرة المعرفية - الإصدار الرابع) هو تقييم موحد طورته شركة GL Assessment البريطانية. لا يقيس هذا الاختبار ما تعلمه الطالب في المدرسة، بل يقيس قدراته المعرفية الأساسية في أربعة مجالات متميزة.
        </p>
        <Callout>
          <strong>ملاحظة مهمة:</strong> CAT4 يقيس القدرة المعرفية، وليس التحصيل الدراسي. نتيجة جيدة في هذا الاختبار تعني أن لدى الطفل إمكانيات أكاديمية قوية، وليس بالضرورة أن نتائجه الدراسية الحالية ممتازة.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">هيكل اختبار CAT4</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          يتكون الاختبار من أربعة مجالات رئيسية:
        </p>
        <ul className="space-y-3 mb-6">
          <Check>التفكير اللفظي: يقيس القدرة على فهم العلاقات بين الكلمات والمفاهيم، والتفكير بالكلمات</Check>
          <Check>التفكير الكمي: يقيس الاستدلال الرياضي والقدرة على العمل مع الأعداد والأنماط الرقمية</Check>
          <Check>التفكير المكاني: يقيس القدرة على تصور الأشكال والأنماط في الفضاء ومعالجة المعلومات البصرية</Check>
          <Check>الذاكرة العاملة: يقيس القدرة على الاحتفاظ بالمعلومات ومعالجتها بشكل متزامن</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المدارس في الإمارات التي تستخدم CAT4</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          تستخدم الاختبار معظم المدارس البريطانية في الإمارات، بما في ذلك:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>مدارس GEMS Education في دبي وأبوظبي والشارقة</Bullet>
          <Bullet>مدرسة Repton أبوظبي ودبي</Bullet>
          <Bullet>مدرسة The British School Al Khubairat في أبوظبي</Bullet>
          <Bullet>مدارس Jumeirah في دبي</Bullet>
          <Bullet>مدارس Cranleigh وHarrow الدولية</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تفسّر نتيجة CAT4؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          تُعبَّر نتائج CAT4 عادةً كمئينيات أو درجات قياسية. متوسط الدرجات القياسية هو 100، ومعيار الانحراف 15. وهذا يعني:
        </p>
        <ul className="space-y-3 mb-6">
          <Check>85-115: المعدل الطبيعي (68% من الطلاب)</Check>
          <Check>115-130: أعلى من المتوسط (13% من الطلاب)</Check>
          <Check>فوق 130: متفوق استثنائياً (2% من الطلاب)</Check>
        </ul>
        <Callout color="amber">
          معظم المدارس المرموقة في الإمارات تشترط درجات في المئين السبعين أو أعلى. المدارس الأكثر تنافسية قد تشترط المئين الثمانين أو التسعين.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تستعد لاختبار CAT4؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          بما أن CAT4 يقيس القدرات المعرفية الأساسية وليس المعلومات المحفوظة، فإن التحضير يختلف عن التحضير للامتحانات المدرسية العادية. أفضل طرق الاستعداد:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>ممارسة أسئلة الأنماط المنطقية وأسئلة التسلسل بانتظام</Bullet>
          <Bullet>حل ألغاز رياضية وأسئلة استدلال عددي</Bullet>
          <Bullet>ممارسة أسئلة الأشكال والمكعبات والتصور المكاني</Bullet>
          <Bullet>تحسين سرعة القراءة والفهم باللغة الإنجليزية</Bullet>
          <Bullet>التأكد من الحصول على نوم كافٍ وراحة جيدة قبل يوم الاختبار</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الفرق بين CAT4 وتقييمات Eduentry</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          كلا التقييمين يستخدمان نموذج IRT التكيفي وينتجان درجات قياسية على نفس المقياس (متوسط 100). Eduentry يُقدم تقييماً مجانياً يُساعد الطلاب على فهم مستوياتهم قبل خوض اختبارات القبول الرسمية في المدارس.
        </p>
        <p className="text-gray-700 leading-relaxed">
          استخدام تقييم مسبق مثل Eduentry يُتيح لولي الأمر فهم نقاط قوة طفله وضعفه قبل تقديم طلبات التسجيل في المدارس، مما يُساعد في اختيار المدارس المناسبة والتحضير الهادف للاختبارات الرسمية.
        </p>
      </section>
    </>
  ),

  'uae-british-curriculum-school-admissions': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        يُعدّ القبول في المدارس البريطانية والدولية في دبي وأبوظبي من أكثر القرارات أهمية التي يتخذها أولياء الأمور في الإمارات. هذا الدليل يُرشدك عبر كل خطوة من خطوات عملية التقديم.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">نظرة عامة على المنهج البريطاني في الإمارات</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          المنهج البريطاني هو الأكثر انتشاراً في المدارس الخاصة في الإمارات، ويتبع نظام Key Stage البريطاني من KS1 (سنة 1-2) وصولاً إلى KS5 (A-Levels). المدارس البريطانية في الإمارات تخضع لرقابة KHDA في دبي وADEK في أبوظبي.
        </p>
        <Callout>
          المدارس البريطانية في الإمارات تُدرّس بالإنجليزية بشكل أساسي، مع تدريس اللغة العربية كمادة إلزامية وفق اشتراطات وزارة التربية والتعليم الإماراتية.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">متطلبات القبول الأساسية</h2>
        <ul className="space-y-3 mb-6">
          <Check>تقرير المدرسة السابقة أو نتائج آخر عامين دراسيين</Check>
          <Check>شهادة حسن السيرة والسلوك من المدرسة السابقة</Check>
          <Check>اختبار تقييم معرفي (CAT4 أو مشابه)</Check>
          <Check>مقابلة الطالب وأحياناً ولي الأمر</Check>
          <Check>وثائق شخصية (جواز سفر، شهادة ميلاد، تأشيرة إقامة)</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أبرز المدارس البريطانية في دبي</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>Jumeirah English Speaking School (JESS) - من أوائل وأعرق المدارس البريطانية في دبي</Bullet>
          <Bullet>Dubai English Speaking School (DESS) - مدرسة حكومية بريطانية بمستوى تعليمي عالٍ</Bullet>
          <Bullet>Repton School Dubai - فرع مدرسة Repton البريطانية العريقة</Bullet>
          <Bullet>Hartland International School - مدرسة حديثة ذات تقييمات عالية</Bullet>
          <Bullet>GEMS Wellington International School - جزء من مجموعة GEMS الواسعة الانتشار</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">مواعيد التقديم</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          معظم المدارس البريطانية في الإمارات تفتح التسجيل في الفترة من سبتمبر إلى ديسمبر للعام الدراسي التالي. من المهم جداً التقديم مبكراً لأن:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>الأماكن محدودة خاصة في المراحل التعليمية المتقدمة</Bullet>
          <Bullet>بعض المدارس لديها قوائم انتظار طويلة</Bullet>
          <Bullet>يتيح التقديم المبكر الوقت الكافي للتحضير لاختبارات القبول</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف يُحضّر طفلك لاختبارات القبول؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          التحضير الهادف والمنظم أكثر فاعلية من الحفظ المكثف. ابدأ بتقييم مستوى طفلك الفعلي قبل التدريب حتى تُركز الجهود على المجالات الأكثر احتياجاً للتطوير.
        </p>
        <p className="text-gray-700 leading-relaxed">
          تقييم Eduentry المجاني يُقدم نقطة بداية ممتازة: يُعطيك درجات موضوعية في اللغة الإنجليزية والرياضيات والتفكير اللفظي وغير اللفظي، مما يُتيح لك التحضير الهادف للاختبارات الرسمية.
        </p>
      </section>
    </>
  ),

  'uae-gifted-programs-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        تحتل الإمارات مكانة متقدمة في الاهتمام برعاية الطلاب الموهوبين والمتفوقين. إذا كنت تعتقد أن طفلك يمتلك قدرات استثنائية وتريد معرفة كيفية توجيهه للبرامج المناسبة، فهذا الدليل يُجيب على أسئلتك.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">تعريف الطالب الموهوب في النظام التعليمي الإماراتي</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          وزارة التربية والتعليم في الإمارات تُعرّف الطالب الموهوب بأنه من يمتلك قدرات أعلى من المتوسط في مجال أو أكثر من المجالات الأكاديمية أو الإبداعية أو القيادية. ليس الذكاء المعرفي وحده المعيار — التفكير الإبداعي والقيادة والمواهب الفنية تُعدّ أيضاً مجالات للتفوق.
        </p>
        <Callout>
          الطلاب الموهوبون لا يحتاجون دائماً إلى درجات امتحانية مرتفعة. بعضهم يُبدع في التفكير الإبداعي أو القيادة مع أداء أكاديمي عادي. برامج الكشف المتقدمة تُقيّم أبعاداً متعددة للموهبة.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أبرز برامج الموهوبين في الإمارات</h2>
        <ul className="space-y-3 mb-6">
          <Check>برنامج مناهج الموهوبين التابع لوزارة التربية والتعليم: يتيح للطلاب المتفوقين دراسة مواد متقدمة والمشاركة في المسابقات الدولية</Check>
          <Check>برنامج STEAM في مدارس أبوظبي: يُركز على العلوم والتكنولوجيا والهندسة والفنون والرياضيات</Check>
          <Check>أكاديمية الإمارات لعلوم الفضاء: للطلاب المتفوقين في الفيزياء والرياضيات والهندسة</Check>
          <Check>برامج IB للمتفوقين: تُقدم مواد Diploma Programme المتقدمة للطلاب ذوي الأداء العالي</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">خطوات التقديم لبرامج الموهوبين</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>تقديم طلب عبر بوابة المدرسة أو وزارة التربية</Bullet>
          <Bullet>خضوع الطالب لاختبار تقييم معرفي معياري (CAT4 أو مشابه)</Bullet>
          <Bullet>تقديم توصية من معلمي الطالب تُوضح مؤشرات الموهبة والتميز</Bullet>
          <Bullet>مقابلة شخصية للطالب وأحياناً لولي الأمر</Bullet>
          <Bullet>ملف إنجازات الطالب في المسابقات والأنشطة اللامنهجية</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تُشجع موهبة طفلك في المنزل؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الموهبة تحتاج إلى بيئة محفزة لتزدهر. إليك بعض الطرق الفعالة:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>اكشف عن مجالات اهتمامه وقدم له كتباً ومصادر متقدمة في هذه المجالات</Bullet>
          <Bullet>شجعه على المشاركة في المسابقات الأكاديمية والعلمية والإبداعية</Bullet>
          <Bullet>أتح له فرص التفاعل مع أقران من نفس المستوى عبر النوادي والمجموعات المتخصصة</Bullet>
          <Bullet>قيّم مستواه الفعلي بتقييمات موضوعية لتتأكد من استثمار جهوده في الاتجاه الصحيح</Bullet>
        </ul>
      </section>
    </>
  ),

  'uae-international-school-entrance-exams': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        تتطلب المدارس الدولية في الإمارات من المتقدمين اجتياز اختبارات قبول متنوعة. فهم هذه الاختبارات واختلافاتها يُساعدك على التحضير بشكل مناسب ومُحدد الهدف.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أنواع اختبارات القبول في المدارس الدولية</h2>
        <ul className="space-y-3 mb-6">
          <Check>CAT4 (GL Assessment): الأوسع انتشاراً في المدارس البريطانية بالإمارات، يقيس القدرات المعرفية في أربعة مجالات</Check>
          <Check>ISEB Common Pre-Test: يُستخدم في المدارس البريطانية المستقلة للمرحلتين 11+ و13+</Check>
          <Check>ERB (Educational Records Bureau): شائع في المدارس الأمريكية، يُقيس القدرات اللغوية والرياضية</Check>
          <Check>اختبارات القبول الخاصة بكل مدرسة: كثير من المدارس المرموقة تُجري اختبارات خاصة بها إلى جانب الاختبارات المعيارية</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">اختلاف متطلبات القبول بين الإمارات</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          مدارس دبي تخضع لرقابة KHDA (هيئة المعرفة والتنمية البشرية) التي تُحدد معايير الجودة ومتطلبات الترخيص. مدارس أبوظبي تخضع لرقابة ADEK (الرقابة على التعليم) التي لها اشتراطات خاصة، بما في ذلك متطلبات تدريس اللغة العربية ومادة التربية الإسلامية.
        </p>
        <Callout color="emerald">
          في كلتا الإمارتين، المعايير الأكاديمية للقبول في المدارس المرموقة تتشابه عموماً، لكن قد تختلف الوثائق والإجراءات الإدارية المطلوبة.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">استراتيجية التحضير للاختبارات</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>ابدأ التحضير قبل 3-6 أشهر من الاختبار المستهدف</Bullet>
          <Bullet>تعرف على تنسيق الاختبار المحدد الذي ستخضع له وليس جميع الاختبارات</Bullet>
          <Bullet>أجر تقييماً تشخيصياً لتحديد نقاط القوة والضعف</Bullet>
          <Bullet>ركز جهود التحضير على المجالات الأضعف مع الحفاظ على المجالات القوية</Bullet>
          <Bullet>مارس ضغط الوقت بحل اختبارات تدريبية في ظروف مشابهة للاختبار الحقيقي</Bullet>
        </ul>
      </section>
    </>
  ),

  'early-internship-child-development-career': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        يتزايد الاهتمام بالتعليم المبكر للمهارات المهنية في منطقة الخليج، إذ تُدرك الأسر والمؤسسات التعليمية أن بناء المسيرة المهنية لا ينتظر التخرج الجامعي. التدريب المبكر في سنوات المراهقة يُحدث فرقاً جوهرياً ومثبتاً بالبحث العلمي.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ما تقوله الأبحاث عن التدريب المبكر</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          دراسات Education and Employers في المملكة المتحدة، والتي شملت أكثر من 17,000 شاب، أثبتت أن المراهقين الذين تفاعلوا مع عالم العمل بشكل هادف قبل سن 16 عاماً حققوا نتائج مهنية أفضل بكثير على المدى البعيد، بما في ذلك دخل أعلى وإحساس أقوى بالهدف المهني.
        </p>
        <Callout>
          <strong>رقم مهم:</strong> المراهقون الذين أجروا أربع تفاعلات هادفة أو أكثر مع عالم العمل قبل سن 16 عاماً لديهم 5 أضعاف أقل في احتمالية الانقطاع عن التعليم والعمل عند سن 19 عاماً.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">لماذا سنوات 14-16 هي النافذة المثالية؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          يُشير علماء نفس التطور إلى أن المرحلة بين 14 و16 عاماً تُمثل نافذة تطور حاسمة لعدة أسباب:
        </p>
        <ul className="space-y-3 mb-6">
          <Check>الدماغ في هذا السن في مرحلة تطور مهارات التفكير التجريدي والتحليلي</Check>
          <Check>المراهق يبدأ في تكوين هويته المهنية وفهم دوره المحتمل في المجتمع</Check>
          <Check>لا يزال هناك وقت كافٍ للتجربة والاكتشاف قبل اتخاذ قرارات دراسية مصيرية</Check>
          <Check>التجارب في هذا السن تترك أثراً أعمق وأطول مدة في تشكيل الشخصية المهنية</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المهارات التي يبنيها التدريب المبكر</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>الكفاءة الذاتية: إحساس حقيقي بالقدرة على إنجاز مهام حقيقية</Bullet>
          <Bullet>الصمود: تعلم التعامل مع الإخفاقات والتحديات في بيئة حقيقية آمنة نسبياً</Bullet>
          <Bullet>التواصل المهني: كيفية الكتابة والتحدث في سياق العمل</Bullet>
          <Bullet>الوضوح المهني: فهم ما إذا كان مجال ما يناسبك قبل الالتزام بسنوات من الدراسة المتخصصة</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تبدأ في السياق الإماراتي؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الإمارات توفر بيئة مثالية للتدريب المبكر بحكم تنوع القطاعات الاقتصادية فيها. من التكنولوجيا في دبي إلى القطاع المالي في DIFC إلى قطاع الطاقة في أبوظبي، الفرص متنوعة ومتاحة لمن يبحث عنها بجدية.
        </p>
        <p className="text-gray-700 leading-relaxed">
          ابدأ بتقييم قدراتك الحالية ومجالات اهتمامك، ثم استهدف التدريب في مجال واحد بعينه. التركيز أكثر فاعلية من التنويع في البداية.
        </p>
      </section>
    </>
  ),

  'kayfa-tajid-staj-dubai': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        البحث عن تدريب مهني في دبي وأنت طالب ثانوي قد يبدو تحدياً كبيراً، لكن مع الاستراتيجية الصحيحة يصبح ممكناً ومثمراً. هذا الدليل يُرشدك خطوة بخطوة.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أين تجد فرص التدريب في دبي؟</h2>
        <ul className="space-y-3 mb-6">
          <Check>المناطق الاقتصادية الحرة: DIFC وDMCC وDubai Silicon Oasis وDubai Internet City تُشجع التوظيف الشبابي</Check>
          <Check>برامج التدريب الصيفي للشركات الكبرى: Microsoft وSAP وEmaar وMashreq Bank</Check>
          <Check>مستشار التوجيه في مدرستك: المدارس المرموقة لديها علاقات مؤسسية مع شركات</Check>
          <Check>LinkedIn وبوابات التوظيف الإماراتية: Bayt.com وNaukrigulf.com</Check>
          <Check>التقديم المباشر للشركات الصغيرة والمتوسطة: غالباً أكثر استجابة وأسرع قراراً</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تكتب طلب تدريب مقنع؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          رسالة طلب التدريب يجب أن تكون قصيرة (فقرتان أو ثلاث) ومحددة:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>الفقرة الأولى: من أنت ولماذا اخترت هذه الشركة تحديداً (اذكر شيئاً محدداً عن الشركة)</Bullet>
          <Bullet>الفقرة الثانية: مهارة أو مشروع واحد يتعلق بمجال عمل الشركة يُثبت جديتك</Bullet>
          <Bullet>الفقرة الثالثة: طلبك المحدد (فترة التدريب، المدة، ما تأمل تعلمه)</Bullet>
        </ul>
        <Callout color="emerald">
          التحديد أفضل من العمومية. رسالة تُثبت أنك بحثت عن الشركة وفهمت عملها تحظى باهتمام أكبر بكثير من رسالة عامة ترسلها لعشرين شركة.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الإجراءات القانونية للتدريب دون سن 18</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          وزارة الموارد البشرية والتوطين في الإمارات تُنظم عمل القاصرين. الطلاب دون 18 عاماً يحتاجون:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>موافقة خطية من ولي الأمر</Bullet>
          <Bullet>التأكد من أن التدريب لا يتعارض مع ساعات الدراسة</Bullet>
          <Bullet>العمل في بيئة آمنة ومناسبة للسن</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          البرامج الصيفية المنظمة تُعامل عادةً مع هذه الإجراءات بشكل آلي، مما يجعلها الخيار الأسهل للبداية.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">استثمار فترة التدريب</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الحصول على التدريب هو البداية، وليس النهاية. خلال فترة التدريب:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>اطرح أسئلة ذكية وكثيرة — المديرون يُقدّرون الفضول الحقيقي</Bullet>
          <Bullet>اطلب ملاحظات على عملك بشكل منتظم</Bullet>
          <Bullet>سجّل ما تتعلمه يومياً في مفكرة خاصة</Bullet>
          <Bullet>بنِ علاقات مهنية حقيقية مع زملائك في التدريب والموظفين</Bullet>
        </ul>
      </section>
    </>
  ),

  'sirat-dhatiyya-staj-16': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        كتابة سيرة ذاتية وعمرك 16 عاماً تبدو مهمة شبه مستحيلة — لا خبرة عمل، لا إنجازات مهنية. لكن الواقع مختلف: لديك ما يكفي لكتابة سيرة ذاتية قوية إذا عرفت كيف تُقدم ما لديك بشكل فعّال.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">بنية السيرة الذاتية لطالب الثانوية</h2>
        <ul className="space-y-3 mb-6">
          <Check>معلومات التواصل: الاسم، البريد الإلكتروني الاحترافي، رقم الهاتف، موقع LinkedIn (إن وُجد)</Check>
          <Check>ملخص احترافي موجز: 2-3 جمل تُعرّف بنفسك وتُبرز ما تبحث عنه</Check>
          <Check>التعليم: المدرسة، الصف، المتوسط التراكمي (إذا كان مرتفعاً), المواد الرئيسية</Check>
          <Check>المهارات: التقنية والشخصية والأدوات التي تجيدها</Check>
          <Check>المشاريع والأنشطة: المشاريع المدرسية ذات الصلة والأنشطة اللامنهجية والتطوع</Check>
          <Check>الدورات والشهادات: أي دورات إضافية أكملتها (حتى المجانية عبر الإنترنت)</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تُبرز غياب الخبرة العملية؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          المشاريع المدرسية يمكن تقديمها كخبرة حقيقية إذا عرضتها بشكل صحيح:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>بدلاً من: "مشروع ثانوي في الرياضيات" — اكتب: "بنيت نموذجاً إحصائياً لتحليل أنماط حضور الطلاب في مشروع درسي وعرضت النتائج على المعلمين"</Bullet>
          <Bullet>بدلاً من: "هواية تصوير" — اكتب: "أنتجت وحررت محتوى مرئياً لحساب Instagram المدرسي بمتابعة X شخص"</Bullet>
          <Bullet>التحديد والأرقام يُضفيان مصداقية على أي إنجاز مهما بدا صغيراً</Bullet>
        </ul>
        <Callout color="amber">
          تجنب الصياغات العامة مثل "أحب التعلم" أو "شخص مثابر". هذه الصفات يذكرها الجميع. استبدلها بأمثلة محددة تُثبت هذه الصفات.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المهارات التقنية التي تُقوّي السيرة الذاتية</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>Microsoft Office Suite (Excel, PowerPoint, Word) — تعلمها مجاناً عبر Microsoft Learn</Bullet>
          <Bullet>أساسيات Python أو JavaScript — منصة Codecademy أو Khan Academy</Bullet>
          <Bullet>أدوات التصميم: Canva (مجاني)، أو Adobe Express</Bullet>
          <Bullet>Google Analytics و Google Ads (شهادات مجانية)</Bullet>
          <Bullet>مهارات تحليل البيانات الأساسية: Sheets و Excel</Bullet>
        </ul>
      </section>
    </>
  ),

  'muqabala-staj-nasayih': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        مقابلة التدريب هي أول مقابلة عمل حقيقية في حياتك على الأغلب. الجيد في الأمر أن المعيار المطلوب منك منخفض نسبياً — لكن التحضير الجيد يُحدث فرقاً هائلاً بين القبول والرفض.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">التحضير قبل المقابلة</h2>
        <ul className="space-y-3 mb-6">
          <Check>ابحث عن الشركة: موقعها الإلكتروني، أحدث أخبارها، منتجاتها أو خدماتها الرئيسية</Check>
          <Check>افهم الدور: ما المهارات المطلوبة وما ستعمل عليه خلال التدريب</Check>
          <Check>حضّر إجابات على الأسئلة الشائعة وتدرّب عليها بصوت عالٍ</Check>
          <Check>حضّر سؤالاً أو سؤالين ذكيين ستطرحهما في نهاية المقابلة</Check>
          <Check>تأكد من ملابسك ومواعيدك مساء اليوم السابق</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تُجيب على "أخبرني عن نفسك؟"</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          هذا السؤال مُصيدة للكثيرين. النموذج الأمثل للإجابة:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>ابدأ بمعلوماتك الأكاديمية باختصار (مدرستك والصف)</Bullet>
          <Bullet>اذكر مجال اهتمامك المرتبط بالدور (لماذا هذا المجال)</Bullet>
          <Bullet>أضف إنجازاً محدداً واحداً ذا صلة (مشروع، دورة، نشاط)</Bullet>
          <Bullet>اختم بسبب اختيارك لهذه الشركة تحديداً</Bullet>
        </ul>
        <Callout color="emerald">
          الوقت المثالي للإجابة 60-90 ثانية. الإجابة الأقصر والأكثر تركيزاً أفضل من الإجابة الطويلة المتشعبة.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أسئلة يجب أن تطرحها في نهاية المقابلة</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>"ما المشاريع التي سيعمل عليها المتدرب عادةً؟"</Bullet>
          <Bullet>"ما المهارات التي يطورها المتدربون الناجحون خلال هذه الفترة؟"</Bullet>
          <Bullet>"كيف يبدو يوم عمل نموذجي للمتدرب؟"</Bullet>
          <Bullet>"ما التحديات الرئيسية التي سأواجهها في هذا الدور؟"</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          هذه الأسئلة تُثبت اهتمامك الحقيقي وتساعدك أيضاً في تقييم ما إذا كانت الفرصة مناسبة لك فعلاً.
        </p>
      </section>
    </>
  ),

  'staj-taqniya-imarat': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        قطاع التكنولوجيا في الإمارات ينمو بوتيرة متسارعة، ومعه تنمو الفرص المتاحة للمتدربين الشباب. دبي تحديداً تُعدّ من أسرع المدن نمواً في قطاع التقنية والابتكار على مستوى الشرق الأوسط.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">خريطة قطاع التكنولوجيا في الإمارات</h2>
        <ul className="space-y-3 mb-6">
          <Check>Dubai Internet City (DIC): يضم أكثر من 1,600 شركة تقنية دولية ومحلية</Check>
          <Check>Dubai Silicon Oasis: مركز للشركات التقنية الناشئة والتصنيع الإلكتروني</Check>
          <Check>Hub71 في أبوظبي: منصة الشركات الناشئة الأسرع نمواً في المنطقة</Check>
          <Check>ADGM (سوق أبوظبي العالمي): يُركز على التقنية المالية والابتكار</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المسارات المتاحة في تدريب التكنولوجيا</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>تطوير البرمجيات: Frontend (React, HTML/CSS) أو Backend (Python, Node.js)</Bullet>
          <Bullet>تحليل البيانات: Excel, SQL, Python الأساسي</Bullet>
          <Bullet>إدارة منتجات التكنولوجيا: الجانب الاستراتيجي وليس التقني</Bullet>
          <Bullet>ضمان الجودة واختبار البرامج: لا يتطلب خبرة برمجية متقدمة</Bullet>
          <Bullet>دعم تقنية المعلومات: الجانب التشغيلي من التكنولوجيا</Bullet>
          <Bullet>التسويق الرقمي لشركات التقنية: محتوى تقني وتحليل بيانات</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تبني مشروعاً تقنياً قبل التقديم للتدريب</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          المشروع الشخصي هو أقوى ورقة يمكن لطالب الثانوية تقديمها. أفكار مشاريع مناسبة لمستوى الثانوية:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>موقع ويب بسيط لنشاط تجاري محلي أو لمدرستك</Bullet>
          <Bullet>تطبيق Excel لتتبع إنفاقك الشخصي أو جدولة المذاكرة</Bullet>
          <Bullet>حساب تواصل اجتماعي يتبع موضوعاً تحبه</Bullet>
          <Bullet>تحليل بيانات لموضوع يهمك باستخدام Python أو Excel</Bullet>
        </ul>
        <Callout color="indigo">
          المشروع لا يحتاج أن يكون معقداً أو مبتكراً. أن تُكمل مشروعاً وتشرح ما تعلمته منه يُثير إعجاب أصحاب العمل أكثر من الكلام النظري عن اهتمامك بالتكنولوجيا.
        </Callout>
      </section>
    </>
  ),

  'staj-tamwil-imarat': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        القطاع المالي في الإمارات من أكثر القطاعات ديناميكية وطلباً، ويُقدم للمتدربين الشباب فهماً عميقاً لآليات الاقتصاد والأعمال. هذا القطاع يبحث عن مزيج من القدرة التحليلية والاتصال المهني.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">هيكل القطاع المالي في الإمارات</h2>
        <ul className="space-y-3 mb-6">
          <Check>البنوك الحكومية: بنك الإمارات دبي الوطني وبنك أبوظبي الأول - الأكبر والأكثر فرصاً للمتدربين</Check>
          <Check>مراكز مالية دولية: DIFC في دبي وADGM في أبوظبي - يضمان مؤسسات مالية عالمية</Check>
          <Check>شركات التأمين: شركات كبرى مثل MetLife وAXA وChub تُقدم برامج تدريبية</Check>
          <Check>التكنولوجيا المالية (Fintech): شركات ناشئة في DIFC وHub71 تُرحب بالشباب المبتكر</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المهارات المطلوبة للتدريب في القطاع المالي</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>الرياضيات القوية: خاصة الإحصاء والتحليل الكمي</Bullet>
          <Bullet>Excel المتقدم: Pivot Tables والصيغ المتقدمة وتحليل البيانات</Bullet>
          <Bullet>مهارات التواصل المكتوب: كتابة التقارير والملخصات التنفيذية</Bullet>
          <Bullet>اهتمام موثق بالأسواق المالية والاقتصاد</Bullet>
          <Bullet>الاحترافية والمظهر المهني: معيار عالٍ في هذا القطاع</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تُظهر اهتمامك بالتمويل في طلبك؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الاهتمام النظري لا يكفي — يجب أن تُثبته بأفعال:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>أكمل دورة تمهيدية في المالية والمحاسبة (Coursera أو edX تُقدمان دورات مجانية)</Bullet>
          <Bullet>اقرأ الأخبار الاقتصادية يومياً (Arabian Business, Gulf News Business)</Bullet>
          <Bullet>شارك في مسابقات محاكاة تداول الأسهم إذا وُجدت في مدرستك</Bullet>
          <Bullet>تابع أسهم الشركات الكبرى في السوق الإماراتي واكتب ملاحظاتك الخاصة</Bullet>
        </ul>
      </section>
    </>
  ),

  'dhakaa-istinai-mustaqbal-amal': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        لم تعد الإجابة عن "ماذا أريد أن أعمل في المستقبل؟" سؤالاً سهلاً. الذكاء الاصطناعي يُعيد تشكيل سوق العمل العالمي، والإمارات في قلب هذا التحول. ما الذي يحتاج طلاب الثانوية اليوم أن يفهموه لكي يكونوا مستعدين للغد؟
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الوظائف التي يُهددها الذكاء الاصطناعي</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الذكاء الاصطناعي يُؤدي بشكل متسارع المهام التكرارية والمحددة: إدخال البيانات، والترجمة الأساسية، وكثير من مهام المحاسبة الروتينية، والمهام القانونية الأولية، وبعض المهام الطبية التشخيصية. هذا لا يعني نهاية هذه المهن، بل تحولاً في طبيعة العمل فيها.
        </p>
        <Callout color="amber">
          الذكاء الاصطناعي لا "يأخذ" الوظائف — بل يُغير ما يُتوقع من الإنسان في هذه الوظائف. المهنيون الذين يُتقنون العمل مع أدوات الذكاء الاصطناعي لن يُستبدلوا؛ أولئك الذين يرفضون التكيف سيواجهون تحديات.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المهارات الأكثر طلباً في اقتصاد الذكاء الاصطناعي</h2>
        <ul className="space-y-3 mb-6">
          <Check>التفكير النقدي وتقييم المعلومات: في عالم تتكاثر فيه المعلومات المُولّدة بالذكاء الاصطناعي، القدرة على التحقق والتحليل لا تُقدر بثمن</Check>
          <Check>الإبداع وحل المشكلات المعقدة: الذكاء الاصطناعي يُجيد التنفيذ، لكن البشر يتفوقون في تحديد المشكلات الجديدة وصياغة الحلول غير التقليدية</Check>
          <Check>الذكاء العاطفي والتعاطف: في تعاملات تتطلب فهماً إنسانياً عميقاً</Check>
          <Check>القيادة والتأثير: قدرة إلهام الآخرين وتوجيههم</Check>
          <Check>العمل مع الذكاء الاصطناعي: إتقان استخدام أدوات الذكاء الاصطناعي كـ Copilot وChatGPT في سياق مهني</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">المجالات الأكثر نمواً في الإمارات بسبب الذكاء الاصطناعي</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>التكنولوجيا المالية والذكاء الاصطناعي المالي: اكتشاف الاحتيال، وتقييم الائتمان، والاستثمار الآلي</Bullet>
          <Bullet>الرعاية الصحية الرقمية: تحليل الصور الطبية، والتشخيص المساعد، والتسجيل الطبي الذكي</Bullet>
          <Bullet>التعليم الذكي: أنظمة التعلم التكيفية وتخصيص المحتوى التعليمي</Bullet>
          <Bullet>إدارة سلاسل التوريد الذكية: تحسين الخدمات اللوجستية والمستودعات</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">خطوات عملية لطالب الثانوية في الإمارات اليوم</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>تعلم أساسيات كيفية عمل الذكاء الاصطناعي (لا البرمجة بالضرورة، بل المفاهيم)</Bullet>
          <Bullet>استخدم أدوات الذكاء الاصطناعي في تعلمك اليومي بشكل مدروس</Bullet>
          <Bullet>ركز على المهارات الإنسانية: التواصل والإقناع والقيادة</Bullet>
          <Bullet>احصل على خبرة عمل حقيقية مبكراً — لا شيء يُطور المهارات الإنسانية كالعمل الفعلي</Bullet>
        </ul>
      </section>
    </>
  ),

  'staj-sayf-imarat': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        الصيف في الإمارات فرصة ذهبية لطلاب الثانوية لاكتساب خبرة مهنية حقيقية. البرامج الصيفية للشركات الكبيرة تفتح أبوابها عادةً من مارس إلى مايو — وهذا يعني أن التخطيط المبكر أمر حاسم.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أبرز برامج التدريب الصيفي في الإمارات</h2>
        <ul className="space-y-3 mb-6">
          <Check>Microsoft UAE Summer Internship: برنامج 8 أسابيع للطلاب 16+ في مجالات التكنولوجيا والتسويق</Check>
          <Check>Emaar Summer Program: تدريب في قطاع العقارات والضيافة والتسويق</Check>
          <Check>Mashreq Bank Young Professionals: برنامج للطلاب المهتمين بالقطاع المالي</Check>
          <Check>ADNOC Student Program: للطلاب المهتمين بقطاع الطاقة والهندسة</Check>
          <Check>du Student Innovation Lab: برنامج مبتكر في التكنولوجيا والاتصالات</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تُقدم طلباً ناجحاً للبرامج الصيفية</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>تتبع مواعيد التقديم في سبتمبر-أكتوبر للعام التالي — تُعلن بعض البرامج مبكراً جداً</Bullet>
          <Bullet>اقرأ وصف البرنامج جيداً وخصص طلبك لكل برنامج بدلاً من إرسال طلب موحد</Bullet>
          <Bullet>اطلب خطاب توصية من معلم يعرفك جيداً مبكراً</Bullet>
          <Bullet>أعدّ نفسك لمقابلة المجموعة (Group Assessment) التي تستخدمها الشركات الكبيرة</Bullet>
        </ul>
        <Callout color="indigo">
          الشركات الكبرى تتلقى مئات الطلبات لبرامجها الصيفية. ما يُميزك ليس درجاتك الدراسية فقط، بل الوضوح في معرفة ما تريده تعلمه وسبب اختيارك لهذه الشركة تحديداً.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">تعظيم الاستفادة من التدريب الصيفي</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          نهاية التدريب ليست نهاية القصة. كيف تجعل تدريبك الصيفي نقطة انطلاق وليس مجرد تجربة عابرة:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>احتفظ بعلاقتك مع المشرف ومزملاء التدريب على LinkedIn</Bullet>
          <Bullet>اكتب تقريراً شخصياً عن أبرز ما تعلمته وأهدافك المهنية القادمة</Bullet>
          <Bullet>اطلب شهادة تدريب أو خطاب توصية بعد انتهاء الفترة</Bullet>
          <Bullet>استخدم التجربة كمادة خصبة لرسالة الدوافع الجامعية</Bullet>
        </ul>
      </section>
    </>
  ),

  'staj-tadwiq-raqmi': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        التسويق الرقمي من أكثر المجالات ترحيباً بالمتدربين الشباب في الشرق الأوسط. ليس لأن الشركات تبحث عن خبراء، بل لأنها تُدرك أن الجيل الشاب يفهم المنصات الرقمية بشكل فطري. هذه الميزة يمكن أن تُحوّلها إلى فرصة مهنية حقيقية.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">مجالات التسويق الرقمي المتاحة للمتدربين</h2>
        <ul className="space-y-3 mb-6">
          <Check>إدارة وسائل التواصل الاجتماعي: إنشاء المحتوى وجدولته وتحليل الأداء</Check>
          <Check>إنشاء المحتوى: كتابة مدونات، وتصوير فيديو، وتصميم إنفوجرافيك</Check>
          <Check>تحسين محركات البحث (SEO): يمكن تعلمه بسرعة ويُقدر من أصحاب العمل</Check>
          <Check>إدارة الإعلانات المدفوعة: Meta Ads وGoogle Ads بشكل مساعد للفريق</Check>
          <Check>تحليل الأداء: Google Analytics وتقارير المنصات الاجتماعية</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تبني محفظة أعمال (Portfolio) قبل التقديم</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          المحفظة هي أقوى ما يمكنك تقديمه في التسويق الرقمي — تثبت مهاراتك بالعمل لا بالكلام:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>أدر حساباً على Instagram أو TikTok حول موضوع تُحبه لمدة 3 أشهر واجمع إحصاءات النمو</Bullet>
          <Bullet>ساعد نشاطاً تجارياً محلياً (حتى لو مجاناً في البداية) بإدارة حضوره الرقمي</Bullet>
          <Bullet>انشئ موقعاً بسيطاً على WordPress أو Wix وراقب زياراته</Bullet>
          <Bullet>أكمل المنهج التدريبي لـ Google Digital Garage (مجاني وبالعربية)</Bullet>
        </ul>
        <Callout color="emerald">
          حساب Instagram بـ 500 متابع حقيقي حول موضوع ما، تديره بانتظام لثلاثة أشهر، أكثر إقناعاً لأصحاب العمل من شهادة نظرية في التسويق.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">خصوصية السوق الخليجي في التسويق الرقمي</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>Snapchat وTikTok أكثر انتشاراً في الخليج مقارنة بأوروبا وأمريكا</Bullet>
          <Bullet>المحتوى العربي في طلب متزايد من المعلنين الراغبين في الوصول للجمهور العربي</Bullet>
          <Bullet>رمضان وموسم الصيف والمناسبات الوطنية محطات تسويقية ضخمة تحتاج لتحضير مسبق</Bullet>
          <Bullet>المعايير الثقافية والدينية في الإعلانات أكثر صرامة — فهمها ميزة تنافسية</Bullet>
        </ul>
      </section>
    </>
  ),

  'staj-tahlil-bayanat': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        تحليل البيانات يُعدّ من أسرع المهن نمواً في الإمارات. تقارير سوق العمل الإماراتية تُشير باستمرار إلى نقص حاد في المحللين المؤهلين. هذا يعني أن من يبدأ التعلم مبكراً يُبني ميزة تنافسية قوية.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ما هو تحليل البيانات فعلياً؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          تحليل البيانات هو فن استخلاص رؤى مفيدة من الأرقام والمعلومات. المحلل يطرح الأسئلة الصحيحة، يجمع البيانات، ينظفها، ويحللها، ثم يعرض النتائج بشكل واضح لمن يحتاجها لاتخاذ قرارات.
        </p>
        <Callout>
          تحليل البيانات ليس برمجة بالضرورة. كثير من التحليل يتم بـ Excel والرسوم البيانية. البرمجة (Python أو R) تُضيف قوة وسرعة، لكنها ليست شرطاً للبداية.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">مسار التعلم الموصى به لطالب الثانوية</h2>
        <ul className="space-y-3 mb-6">
          <Check>المرحلة 1: Excel المتقدم (Pivot Tables, VLOOKUP, الدوال الإحصائية) — أسبوعان</Check>
          <Check>المرحلة 2: تصور البيانات (Excel Charts, Google Data Studio المجاني) — أسبوعان</Check>
          <Check>المرحلة 3: أساسيات الإحصاء الوصفي (المتوسط، الوسيط، الانحراف المعياري) — أسبوعان</Check>
          <Check>المرحلة 4: Python الأساسي مع Pandas (اختياري، للمتقدمين) — شهر</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">مصادر البيانات المجانية لمشاريعك التدريبية</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>بيانات حكومة دبي المفتوحة: data.dubai.ae</Bullet>
          <Bullet>بيانات إحصاءات الإمارات: fcsa.gov.ae</Bullet>
          <Bullet>Kaggle.com: أكبر منصة بيانات مجانية للتعلم</Bullet>
          <Bullet>World Bank Open Data: بيانات اقتصادية دولية شاملة</Bullet>
          <Bullet>Google Trends: بيانات اهتمامات البحث في منطقتك</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">القطاعات الأكثر حاجة لمحللي البيانات في الإمارات</h2>
        <ul className="space-y-3 mb-6">
          <Bullet>القطاع المالي: تحليل المخاطر وسلوك العملاء</Bullet>
          <Bullet>التجزئة والتجارة الإلكترونية: Noon وAmazon UAE وCarrefour يوظفون محللين بكثافة</Bullet>
          <Bullet>الاتصالات: Etisalat وdu يحتاجان تحليل بيانات الاستخدام والعملاء</Bullet>
          <Bullet>الرعاية الصحية: مجموعات مستشفيات كبرى تستثمر في تحليل البيانات الصحية</Bullet>
        </ul>
      </section>
    </>
  ),

  'mashruik-tijarik-16': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        الإمارات من أفضل بيئات ريادة الأعمال في العالم — نظام قانوني مرن، وبنية تحتية رقمية متقدمة، وسوق متنوع وقابل للنمو. بدء مشروع صغير في سن 16 ليس مجرد مغامرة، بل هو استثمار في مهاراتك وثقتك بنفسك قبل أي شيء آخر.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الإطار القانوني لعمل القاصرين في الإمارات</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          قانون العمل الإماراتي يُحدد سن 15 كحد أدنى للعمل بإذن خاص من وزارة الموارد البشرية وموافقة ولي الأمر. لتسجيل كيان تجاري، يجب بلوغ 18 عاماً أو الحصول على إذن قضائي. الحلول العملية:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>العمل الحر عبر منصات مثل Fiverr وUpwork لا يتطلب ترخيصاً رسمياً في البداية</Bullet>
          <Bullet>يمكن لولي الأمر تسجيل رخصة تجارية نيابة عنك ودعمك في إدارة النشاط</Bullet>
          <Bullet>برنامج رواد المدارس التابع لمحاكم دبي يُتيح تجربة الأعمال بشكل تعليمي خاضع للإشراف</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أفكار مشاريع مناسبة لطالب الثانوية في الإمارات</h2>
        <ul className="space-y-3 mb-6">
          <Check>التدريس الخصوصي عبر الإنترنت: الرياضيات أو اللغة الإنجليزية للطلاب الأصغر — طلب دائم ومتجدد</Check>
          <Check>إدارة حسابات التواصل الاجتماعي للمحلات والمطاعم المحلية — سوق واسع وغير مشبع</Check>
          <Check>تصميم الجرافيك الأساسي: القوائم، والبطاقات، والإعلانات الرقمية</Check>
          <Check>بيع منتجات محلية الصنع: المنتجات الحرفية أو المواد الغذائية عبر Instagram</Check>
          <Check>تصوير المناسبات: حفلات المدارس والمناسبات العائلية البسيطة</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف تتعلم من مشروعك مهارات مهنية حقيقية؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          المشروع التجاري الصغير يُعلمك ما لا تستطيع أي دورة تعليمها:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>إدارة العلاقة مع العميل: كيف تُرضي عميلاً غير راضٍ؟ تجربة لا تُنسى</Bullet>
          <Bullet>التسعير واتخاذ القرارات المالية: ما السعر العادل؟ ما نقطة التعادل؟</Bullet>
          <Bullet>التسويق الذاتي: كيف تُعرّف بنفسك وبخدمتك دون أن تبدو مبالغاً؟</Bullet>
          <Bullet>إدارة الوقت: كيف توازن بين الدراسة والمشروع والحياة الاجتماعية؟</Bullet>
        </ul>
        <Callout color="emerald">
          المشروع الذي يُخفق في كسب المال ما زال يُعلمك دروساً قيمة. الفشل المبكر والآمن في سن 16 أفضل بكثير من الفشل في مشروع حقيقي بعد سنوات.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">توثيق تجربتك لاستخدامها في الجامعة</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الجامعات الدولية المرموقة تبحث عن المبادرة والأصالة في طلبات القبول. قصة طالب بنى مشروعاً صغيراً وتعلم منه وفشل وحاول مجدداً — هذه قصة تُميزك عن آلاف المتقدمين الذين لديهم نفس الدرجات الأكاديمية.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>وثّق رحلتك: احتفظ بمفكرة تسجّل فيها التحديات والحلول والأرباح والخسائر</Bullet>
          <Bullet>احتفظ بشهادات عملائك أو رسائل شكرهم</Bullet>
          <Bullet>صوّر إنجازاتك الرقمية (لقطات شاشة لحجم المتابعين، وعدد المبيعات)</Bullet>
        </ul>
      </section>
    </>
  ),

  'pisa-2025-azmat-talim-alami-ma-yahtaj-marifatuh-awaliyaa-al-umur': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        في سبتمبر 2026، أصدرت منظمة التعاون الاقتصادي والتنمية (OECD) نتائج بيزا 2025 — البرنامج الدولي لتقييم الطلاب — وقد أذهلت هذه النتائج وزراء التعليم ومديري المدارس وأولياء الأمور في أنحاء العالم. للمرة الأولى في تاريخ هذا التقييم، سجّلت دول منظمة التعاون الاقتصادي والتنمية في وقت واحد أدنى متوسطاتها على الإطلاق في المجالات الثلاثة الأساسية: الرياضيات والقراءة والعلوم. شارك في الدراسة أكثر من 760 ألف طالب في 91 دولة واقتصاداً، يمثّلون 33 مليون شاب في الخامسة عشرة من عمرهم حول العالم. ضخامة حجم هذه الدراسة تجعل من المستحيل تجاهل نتائجها بوصفها ضوضاء إحصائية.
      </p>
      <p className="text-gray-700 leading-relaxed">
        هذا ليس انتكاسة عابرة. بل هو تسارع في اتجاه مستمر منذ عقد كامل، بنته دورات متتالية من بيزا، وضخّمته سنوات الجائحة، وزاد من حدّته التحوّل الهيكلي في طريقة قراءة الشباب وتعلّمهم وتفاعلهم مع التكنولوجيا. ويصف باحثو منظمة التعاون الاقتصادي والتنمية أنفسهم هذه النتائج بأنها &ldquo;جرس إنذار&rdquo; للأنظمة التعليمية التي سمحت للتشتت وضحالة التعلم والاستخدام غير النقدي للذكاء الاصطناعي بتآكل المهارات الأساسية التي يحتاجها كل طفل للنجاح في حياته البالغة.
      </p>
      <p className="text-gray-700 leading-relaxed">
        بالنسبة لأولياء الأمور، السؤال الفوري ليس مجرداً. بل هو شخصي. ماذا تعني هذه النتائج لطفلك؟ إذا كانت المتوسطات الوطنية تنخفض، فأين يقف طفلك في تلك التوزيعات؟ وماذا يمكنك أن تفعل حيال ذلك؟ تستعرض هذه المقالة نتائج بيزا 2025 مجالاً تلو مجال، وتوضح ما تعنيه البيانات فعلياً للأسر، ولماذا لم يكن فهم الموقع الفردي لطفلك أهم مما هو عليه الآن.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ما هو بيزا ولماذا يهمنا؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          بيزا هو البرنامج الدولي لتقييم الطلاب التابع لمنظمة التعاون الاقتصادي والتنمية، الذي يُجرى كل ثلاث سنوات منذ عام 2000. يختبر الطلاب في سن الخامسة عشرة — العمر الذي يقترب فيه معظم الطلاب في الدول المتقدمة من نهاية التعليم الإلزامي — في الرياضيات والقراءة والعلوم. في عام 2025، شاركت 91 دولة واقتصاداً، وتمثّل النتائج ما يقدّر بـ 33 مليون طالب في جميع أنحاء العالم. لا تقترب أي دراسة تعليمية أخرى من هذا الحجم أو هذا الصرامة المنهجية.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          يهم بيزا لأنه المقياس العالمي الحقيقي الوحيد. تخبرك الامتحانات الوطنية كيف يتنافس الأطفال داخل النظام الخاص بالبلد — مفيد ولكنه محدود. يطرح بيزا الأسئلة نفسها على جميع الطلاب في نفس الظروف ويضع كل درجة على نفس المقياس الدولي. حين تحقق سنغافورة 563 نقطة في حل المسائل الحسابية ويبلغ متوسط منظمة التعاون الاقتصادي والتنمية 500 نقطة، فإن هذا الفارق حقيقي وقابل للقياس. بالنسبة لأولياء الأمور الذين يتخذون قرارات تعليمية، يوفر بيزا نقطة المرجعية الموثوقة الوحيدة لمعرفة مكانة النظام التعليمي الوطني في سياق عالمي.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">أزمة الرياضيات: 22 نقطة ضائعة في عقد واحد</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          انخفضت متوسطات درجات الرياضيات في منظمة التعاون الاقتصادي والتنمية بمقدار 22 نقطة بين عامَي 2015 و2025. لفهم ما يعنيه ذلك عملياً: يقدّر الباحثون أن كل 20 نقطة من نقاط بيزا تعادل تقريباً سنة دراسية واحدة. انخفاض قدره 22 نقطة يعني أن المراهق البالغ من العمر 15 عاماً في دول منظمة التعاون الاقتصادي والتنمية يؤدي الآن على مستوى رياضي يعادل أكثر من سنة كاملة خلف نظيره قبل عقد من الزمن. هذا ليس خطأً في القياس. إنه انهيار منهجي ودولي في التحصيل الرياضي يجب أن يقلق كل ولي أمر.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          تظل أفضل الأداءات متمركزة في شرق آسيا. الولايات القضائية الصينية — بكين وشنغهاي وجيانغسو وتشيجيانغ، المعروفة جماعياً بـ B-S-J-Z — وسنغافورة تستمر في قيادة العالم بهامش كبير. وتحتل أيضاً المراتب العشر الأولى كل من إستونيا واليابان وكوريا الجنوبية وماكاو (الصين) وتايبيه الصيني والمملكة المتحدة. تتميّز هذه الأنظمة التعليمية بتوقعات عالية، وجودة تدريس راسخة، وثقافة تأخذ الرياضيات بجدية، وتشتت رقمي محدود نسبياً خلال ساعات المدرسة.
        </p>
        <Callout color="amber">
          <strong>مقياس السنة الدراسية:</strong> كل 20 نقطة بيزا تعادل تقريباً سنة دراسية واحدة. يعني انخفاض منظمة التعاون الاقتصادي والتنمية البالغ 22 نقطة في الرياضيات منذ عام 2015 أن الطفل العادي يدخل حياته البالغة بقدرة رياضية تقل بأكثر من سنة عن الطفل العادي في 2015 — رغم قضاء نفس عدد السنوات في المدرسة.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">انهيار القراءة: 28 نقطة — ونوع جديد من الأمية</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          الانخفاض في القراءة أكثر حدة من الرياضيات، وتداعياته أوسع نطاقاً. انخفضت متوسطات درجات القراءة في منظمة التعاون الاقتصادي والتنمية بمقدار 28 نقطة بين عامَي 2015 و2025 — ما يعادل سنة ونصف من الدراسة تقريباً. لكن الرقم الخام يقلّل من حجم المشكلة، لأن بيزا 2025 كشف أيضاً عن تحوّل نوعي في طريقة قراءة الشباب. تضاعفت تقريباً نسبة الطلاب الذين يُظهرون &ldquo;القراءة المتسرعة&rdquo; — القراءة السريعة غير الدقيقة، بتفضيل السرعة على الفهم — بين عامَي 2018 و2025، لتبلغ 9% من طلاب منظمة التعاون الاقتصادي والتنمية.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          حين سأل بيزا الطلابَ كيف يُقيّمون المعلومات التي يصادفونها، أفاد 46% فقط بأنهم يتحققون من مصداقية المصدر ويُفضّلون الأدلة العلمية عند تقييم الادعاءات. 37% إضافيون يتحققون من المصادر لكنهم يعتمدون في نهاية المطاف على الحس السليم بدلاً من الأدلة العلمية. 11% يثقون بالسلطة العلمية دون التحقق من المصادر. و5% لا يفعلون أياً من الأمرين. بعبارة أخرى، أقل من نصف الشباب البالغين 15 عاماً في دول منظمة التعاون الاقتصادي والتنمية يمتلكون عادات التقييم اللازمة للتعامل مع بيئة معلوماتية يهيمن عليها مخرجات الذكاء الاصطناعي والمعلومات المضلِّلة المنتشرة.
        </p>
        <Callout color="rose">
          <strong>6% فقط من طلاب منظمة التعاون الاقتصادي والتنمية</strong> يتحققون من مصداقية المصادر ويُفضّلون الأدلة العلمية عند تقييم المعلومات. في عصر يستطيع فيه الذكاء الاصطناعي توليد نصوص مقنعة لكن مُختلَقة كلياً في ثوانٍ معدودة، هذه هي الفجوة المهارية الجوهرية ذات الرهانات الأعلى.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">العلوم: صورة متباينة مع نقاط مضيئة حقيقية</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          أظهرت العلوم انخفاضاً إجمالياً أكثر اعتدالاً في دول منظمة التعاون الاقتصادي والتنمية منذ عام 2015. القصة الأكثر إثارة للاهتمام تكمن على مستوى الدول. أربع دول — المملكة المتحدة وتركيا وجمهورية سلوفاكيا وكوستاريكا — أظهرت تحسناً ملحوظاً في درجات العلوم منذ دورة بيزا 2022. هذه إشارة إيجابية حقيقية تدل على أن بعض الأنظمة التعليمية تسير في الاتجاه الصحيح.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          كما قدّم بيزا 2025 مجالاً جديداً لأول مرة: حل المسائل الحسابية. قيّم هذا المجال قدرة الطلاب على التفكير المنهجي في مسائل تتضمن خوارزميات وبيانات وتسلسلات منطقية. وصل ما يقارب ثلثَي طلاب منظمة التعاون الاقتصادي والتنمية إلى المستوى 3 أو أعلى، فيما بلغ ما يقارب ربعهم المستويَين 5 و6. كانت أعلى الولايات القضائية أداءً ماكاو (الصين) بـ 572 نقطة، وسنغافورة بـ 563، و B-S-J-Z الصيني بـ 560 — وكلها أعلى بكثير من متوسط منظمة التعاون الاقتصادي والتنمية البالغ 500 نقطة.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الذكاء الاصطناعي في الفصل الدراسي: سيف ذو حدّين</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          يُعدّ بيزا 2025 أول دورة تفحص بصورة منهجية استخدام الذكاء الاصطناعي بين الطلاب، والنتائج أكثر دقة — وأكثر إثارة للقلق — مما اقترحه معظم المعلّقين. يفيد 46% من طلاب منظمة التعاون الاقتصادي والتنمية باستخدام روبوتات الدردشة المدعومة بالذكاء الاصطناعي أسبوعياً أو أكثر. حين فحص بيزا العلاقة بين استخدام الذكاء الاصطناعي والأداء الأكاديمي، وجد ارتباطاً سلبياً لافتاً لفئة استخدام محددة: توظيف الذكاء الاصطناعي في مهام دراسية بعينها.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          الطلاب الذين يستخدمون الذكاء الاصطناعي بانتظام لتلخيص النصوص أو صياغة الأعمال الكتابية أو إجراء الأبحاث يحصلون على ما يقارب 20 نقطة أقل في العلوم مقارنةً بالطلاب الذين لا يستخدمونه لهذه المهام — ما يعادل تأخر نحو سنة دراسية كاملة عن أقرانهم الذين ينجزون المهام نفسها بجهدهم المعرفي الخاص. الآلية ليست صعبة الفهم: حين يتولى الذكاء الاصطناعي العمل المعرفي الذي يبني المعرفة والمهارات، يُتجاوَز الطالب. المهمة تُنجَز لكن التعلم لا يحدث.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          لكن الصورة ليست سلبية بشكل موحد. الطلاب الذين يستخدمون الذكاء الاصطناعي لأغراض التعلم العامة — الاستكشاف والتفسير والإجابة على التساؤلات — يُظهرون أداءً مشابهاً للطلاب الذين لا يستخدمونه. والطلاب الذين يتلقّون تعليم محو الأمية في الذكاء الاصطناعي في المدرسة ويستخدمونه بصفة عامة يحققون أداءً أفضل قليلاً. المشكلة ليست الذكاء الاصطناعي بحد ذاته. المشكلة هي الإحلال: استخدام الذكاء الاصطناعي لتجنب الجهد المعرفي الذي يُنتج التعلم.
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet>
            <strong>46% من طلاب منظمة التعاون الاقتصادي والتنمية</strong> يستخدمون روبوتات الدردشة المدعومة بالذكاء الاصطناعي أسبوعياً أو أكثر.
          </Bullet>
          <Bullet>
            <strong>~20 نقطة أقل في العلوم</strong> مرتبطة باستخدام الذكاء الاصطناعي في مهام دراسية محددة — ما يعادل تأخر نحو سنة دراسية.
          </Bullet>
          <Bullet>
            <strong>الاستخدام العام للذكاء الاصطناعي</strong> لأغراض الاستكشاف التعليمي لا يُظهر ارتباطاً سلبياً معنوياً بالأداء.
          </Bullet>
          <Bullet>
            <strong>28% من الطلاب</strong> يفيدون بأن زملاءهم يتشتتون بالأجهزة الرقمية خلال معظم حصص العلوم أو جميعها.
          </Bullet>
        </ul>
        <Callout color="amber">
          <strong>فخ واجبات الذكاء الاصطناعي:</strong> وجد بيزا 2025 أن استخدام الذكاء الاصطناعي لإنجاز مهام دراسية محددة — التلخيص والصياغة والبحث — مرتبط بالتأخر بسنة دراسية كاملة عن الأقران الذين يؤدّون العمل بأنفسهم. الاختصار يبدو فعّالاً. التكلفة المعرفية خفية — حتى تظهر في نتيجة اختبار.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الشعور بالانتماء: العامل الخفي في النجاح المدرسي</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ثمة نتيجة في بيزا 2025 تحظى باهتمام إعلامي أقل من انخفاضات الدرجات وهي ذات أهمية مساوية لأولياء الأمور: دور الانتماء في النتائج الأكاديمية. يفيد 76% من طلاب منظمة التعاون الاقتصادي والتنمية بشعورهم بالانتماء إلى مدرستهم — وقد تحسّن هذا الرقم منذ عام 2022. سجّلت إسبانيا أعلى شعور بالانتماء في منظمة التعاون الاقتصادي والتنمية بنسبة 90%، فيما سجّلت الدنمارك وبولندا وإيطاليا وليتوانيا أدنى المعدلات، بنسبة 64% أو أقل من الطلاب الذين يشعرون بالانتماء. الفجوة بين الجنسين لافتة: تُبلّغ الفتيات باستمرار عن شعور أضعف بالانتماء المدرسي مقارنةً بالأولاد في دول منظمة التعاون الاقتصادي والتنمية. الطالب الذي لا يشعر بالانتماء إلى مدرسته أقل احتمالاً بكثير أن ينخرط بعمق في التعلم ويثابر في مواجهة الصعوبات.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">لماذا تقييم طفلك لم يكن أهم مما هو عليه الآن؟</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          يُظهر بيزا المتوسطات الوطنية. لكنه لا يستطيع — ولا يقدر — أن يخبرك شيئاً عن الأطفال بشكل فردي. بوصفك ولياً للأمر، فإن انخفاض 22 نقطة في الرياضيات عبر منظمة التعاون الاقتصادي والتنمية هو سياق وليس إجابة. السؤال الجوهري بالنسبة لعائلتك هو أين يقع طفلك داخل هذا التوزيع، وما إذا كان التعليم الذي يتلقّاه يبني المهارات التي يُظهر بيزا 2025 أنها الأكثر عرضة للخطر.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          التباين داخل الدول هو الرقم الذي لا يعرفه معظم أولياء الأمور، وهو الرقم الأكثر أهمية. في دولة نموذجية من دول منظمة التعاون الاقتصادي والتنمية، يتجاوز الفارق بين أعلى وأدنى الطلاب أداءً 200 نقطة بيزا — ما يعادل أكثر من عشر سنوات من الدراسة في فئة عمرية واحدة. بدون تقييم فردي، تُتَّخذ جميع القرارات التعليمية المهمة — الدروس الخصوصية، واختيار المدرسة، واختيار المواد، والطموحات الجامعية — دون المعلومة الأهم: أين يقع طفلك فعلياً.
        </p>
        <Callout color="indigo">
          متوسط بيزا يُخبرك عن الأنظمة. Eduentry يُخبرك عن طفلك.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">قيّم طفلك مع Eduentry: مجاناً ومبنياً على أسس علمية</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry هي منصة تقييم تكيفي مصمَّمة خصيصاً لمنح أولياء الأمور المعلومات على المستوى الفردي التي لا يستطيع بيزا توفيرها. تستخدم نظرية الاستجابة للفقرة (IRT) — المنهجية السيكومترية نفسها التي يقوم عليها بيزا — لوضع كل طفل من سن 6 إلى 17 عاماً على نفس المقياس الدولي. يتكيّف التقييم في الوقت الفعلي مع استجابات كل طفل، ويستغرق نحو 20 دقيقة، ويوفر درجة موحّدة وترتيباً مئوياً عالمياً. التقييم الأول مجاني تماماً، ولا يستلزم تسجيلاً.
        </p>
        <ul className="space-y-4 mb-6">
          <Check>
            <strong>الرياضيات</strong> — الاستدلال الرقمي وحل المسائل متوافق مع إطار بيزا في الرياضيات
          </Check>
          <Check>
            <strong>اللغة الإنجليزية</strong> — فهم القراءة والمهارات اللغوية باستخدام نفس الإطار التقييمي لقراءة بيزا
          </Check>
          <Check>
            <strong>الاستدلال اللفظي</strong> — التفكير المنطقي المطبَّق على اللغة، وهو منبئ قوي بالإمكانات الأكاديمية
          </Check>
          <Check>
            <strong>الاستدلال غير اللفظي</strong> — الاستدلال المجرد والمكاني بمعزل عن الخلفية اللغوية
          </Check>
          <Check>
            <strong>الترتيب المئوي العالمي</strong> — يضع طفلك على نفس المقياس الدولي لبيزا
          </Check>
          <Check>
            <strong>مجاني، لا يستلزم تسجيلاً</strong> — التقييم الكامل يستغرق نحو 20 دقيقة
          </Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">الخاتمة: جرس إنذار، لا دعوة إلى اليأس</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          نتائج بيزا 2025 مُقلِقة. الانخفاض المتزامن في المجالات الثلاثة الأساسية، وتضاعف &ldquo;القراءة المتسرعة&rdquo;، وفجوة الأداء المرتبطة بالذكاء الاصطناعي، وهشاشة المراهقين أمام المعلومات المضلِّلة — مجتمعةً، تصف هذه النتائج جيلاً من الشباب تعاني مهاراته الأساسية ضغطاً حقيقياً. لكن البيانات نفسها التي تُحدّد الأزمة تُحدّد أيضاً ما ينجح: توقعات عالية، وعلاقات متينة بين المعلمين والطلاب، وثقافة القراءة العميقة والنقدية، ومنهج تكنولوجي يبني المهارات بدلاً من استبدالها.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          بوصفك ولياً للأمر، أقوى خطوة يمكنك اتخاذها الآن هي الانتقال من الإحصاءات الوطنية إلى الموقع الفردي لطفلك. بيزا يروي القصة العالمية. ما تحتاج معرفته هو فصلك الخاص. يستغرق تقييم Eduentry التكيفي 20 دقيقة، وهو مجاني تماماً، ويضع طفلك على نفس المقياس الدولي الذي يستخدمه بيزا. حين تعرف أين يقف طفلك، يمكنك التصرف بدقة لا بقلق.
        </p>
      </section>
    </>
  ),

}

export function getArabicBlogContent(slug: string): React.ReactNode {
  return AR_CONTENT[slug] ?? null
}
