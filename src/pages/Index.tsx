import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 1, type: "title", label: "Введение", duration: "1 мин" },
  { id: 2, type: "problem", label: "Проблема", duration: "1 мин" },
  { id: 3, type: "stats", label: "Статистика", duration: "1 мин" },
  { id: 4, type: "positive", label: "Позитив", duration: "1 мин" },
  { id: 5, type: "morality", label: "Нравственность", duration: "1 мин" },
  { id: 6, type: "conclusion", label: "Выводы", duration: "30 с" },
  { id: 7, type: "final", label: "Заключение", duration: "30 с" },
];

const TOTAL_SECONDS = 360;

function TitleSlide() {
  return (
    <div className="slide-content relative flex flex-col items-center justify-center h-full text-center px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-circle-1" />
        <div className="geo-circle-2" />
        <div className="geo-circle-3" />
        <div className="geo-hline" />
        <div className="geo-vline" />
        <div className="geo-diamond" />
      </div>
      <div className="relative z-10" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-6">Подсухин Алексей · Антонов Тимур · 112 ЛД</div>
        <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-4">
          Место человека
          <br />
          <span className="text-gold">преклонного возраста</span>
          <br />
          в современном обществе
        </h1>
        <div className="divider-gold my-8 mx-auto" />
        <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          Отношение к пожилым людям как важный показатель
          <br />
          <span className="text-gold/90 font-medium">нравственного состояния общества</span>
        </p>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={`h-[2px] w-10 ${i === 1 ? "bg-gold" : "bg-white/20"}`} />
        ))}
      </div>
    </div>
  );
}

function ProblemSlide() {
  const problems = [
    { icon: "Eye", text: "Стереотипы об «устаревших» навыках и мышлении" },
    { icon: "Users", text: "Эйджизм — дискриминация по возрасту на рынке труда" },
    { icon: "Heart", text: "Социальная изоляция и невидимость в публичном пространстве" },
    { icon: "Frown", text: "Патернализм: отношение как к людям «второго сорта»" },
  ];

  return (
    <div className="slide-content relative flex flex-col justify-center h-full px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-mesh" />
        <div className="geo-corner-tl" />
        <div className="geo-corner-br" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto w-full" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-4">Проблема</div>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-2">
          Дискриминация
          <span className="text-gold"> & </span>
          Стереотипы
        </h2>
        <p className="font-body text-white/50 mb-10 text-lg">Барьеры, с которыми сталкиваются пожилые люди</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="problem-card" style={{ animationDelay: `${i * 0.1}s`, animation: "fadeUp 0.6s ease both" }}>
              <div className="problem-icon-wrap">
                <Icon name={p.icon} size={22} className="text-gold" fallback="AlertCircle" />
              </div>
              <p className="font-body text-white/85 text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 border border-gold/30 rounded-sm bg-gold/5">
          <p className="font-body text-white/60 text-sm italic">
            «Эйджизм — одна из наиболее распространённых и социально допустимых форм предрассудков в мире» — ВОЗ
          </p>
        </div>
      </div>
    </div>
  );
}

function StatsSlide() {
  const stats = [
    { value: "16%", label: "мирового населения — люди 65+", sub: "Прогноз к 2050 году — 22%" },
    { value: "43%", label: "пожилых чувствуют себя одинокими", sub: "Регулярно или большую часть времени" },
    { value: "30%", label: "испытывают трудности с доступом к услугам", sub: "Медицина, транспорт, цифровые сервисы" },
    { value: "67%", label: "хотят быть активными в обществе", sub: "Но не имеют для этого возможностей" },
  ];

  return (
    <div className="slide-content relative flex flex-col justify-center h-full px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-grid-bg" />
        <div className="geo-circle-stats" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto w-full" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-4">Статистика</div>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-10">
          Цифры,
          <span className="text-gold"> которые говорят</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.12}s`, animation: "fadeUp 0.6s ease both" }}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-6 flex-wrap">
          {[
            { icon: "TrendingUp", text: "К 2030 г. каждый 6-й человек на планете — 60+" },
            { icon: "Globe", text: "Россия входит в топ-20 стран по доле пожилого населения" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/60 text-sm font-body">
              <Icon name={item.icon} size={16} className="text-gold/70" fallback="Info" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PositiveSlide() {
  const examples = [
    { icon: "Building2", title: "Серебряный университет", desc: "Программы обучения и переквалификации для людей 55+", tag: "Образование" },
    { icon: "HandHeart", title: "Волонтёрские сети", desc: "Вовлечение пожилых как наставников и экспертов", tag: "Сообщество" },
    { icon: "Laptop", title: "Цифровая грамотность", desc: "Государственные программы помощи с технологиями", tag: "Технологии" },
    { icon: "Home", title: "Межпоколенческое жильё", desc: "Совместные дома молодёжи и пожилых в Европе и России", tag: "Социум" },
  ];

  return (
    <div className="slide-content relative flex flex-col justify-center h-full px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-dots" />
        <div className="geo-arc" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto w-full" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-4">Позитивный опыт</div>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-2">
          Примеры
          <span className="text-gold"> поддержки</span>
          <br />и включённости
        </h2>
        <p className="font-body text-white/50 mb-8 text-lg">Лучшие практики из России и мира</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examples.map((e, i) => (
            <div key={i} className="positive-card" style={{ animationDelay: `${i * 0.1}s`, animation: "fadeUp 0.6s ease both" }}>
              <div className="flex items-start gap-4">
                <div className="positive-icon-wrap">
                  <Icon name={e.icon} size={20} className="text-gold" fallback="Star" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-body font-semibold text-white text-base">{e.title}</span>
                    <span className="tag-pill">{e.tag}</span>
                  </div>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MoralitySlide() {
  return (
    <div className="slide-content relative flex flex-col justify-center h-full px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-ring-1" />
        <div className="geo-ring-2" />
        <div className="geo-diag-line" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto w-full" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-4">Нравственность</div>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-8">
          Зеркало
          <span className="text-gold"> общества</span>
        </h2>
        <div className="morality-quote mb-10">
          <div className="quote-mark">"</div>
          <p className="font-display text-2xl md:text-3xl text-white/90 leading-relaxed italic">
            Степень цивилизованности общества определяется тем, как оно относится к своим старикам и детям
          </p>
          <div className="quote-author">— философский принцип гуманизма</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "Scale", title: "Уважение", desc: "Признание жизненного опыта и мудрости" },
            { icon: "Link", title: "Преемственность", desc: "Связь поколений как основа культуры" },
            { icon: "Lightbulb", title: "Эмпатия", desc: "Способность видеть человека, а не возраст" },
          ].map((item, i) => (
            <div key={i} className="morality-card" style={{ animationDelay: `${i * 0.12}s`, animation: "fadeUp 0.6s ease both" }}>
              <Icon name={item.icon} size={28} className="text-gold mb-3" fallback="Heart" />
              <div className="font-body font-semibold text-white text-lg mb-1">{item.title}</div>
              <div className="font-body text-white/55 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConclusionSlide() {
  const actions = [
    "Включать пожилых в общественную жизнь и решение социальных задач",
    "Бороться с эйджизмом — в медиа, на работе, в быту",
    "Развивать доступную среду и цифровую инклюзию",
    "Воспитывать уважение к старшим с детского возраста",
  ];

  return (
    <div className="slide-content relative flex flex-col justify-center h-full px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-grad-bg" />
        <div className="geo-circle-conc" />
        <div className="geo-hline-conc" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto w-full" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-4">Выводы и призыв</div>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-2">
          Что мы можем
          <span className="text-gold"> сделать?</span>
        </h2>
        <p className="font-body text-white/50 mb-8 text-lg">Конкретные шаги к инклюзивному обществу</p>
        <div className="space-y-3 mb-10">
          {actions.map((a, i) => (
            <div key={i} className="action-item" style={{ animationDelay: `${i * 0.1}s`, animation: "fadeUp 0.6s ease both" }}>
              <div className="action-num">{String(i + 1).padStart(2, "0")}</div>
              <p className="font-body text-white/85 text-base leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="conclusion-cta">
          <Icon name="Heart" size={20} className="text-gold" />
          <span className="font-body text-white font-medium text-base md:text-lg">
            Общество здорово настолько, насколько оно заботится о своих самых уязвимых членах
          </span>
        </div>
      </div>
    </div>
  );
}

function FinalSlide() {
  const points = [
    { icon: "CheckCircle", text: "Пожилые люди — неотъемлемая часть общества, носители опыта и культуры" },
    { icon: "CheckCircle", text: "Отношение к старшим — главный нравственный индикатор зрелости общества" },
    { icon: "CheckCircle", text: "Эйджизм и социальная изоляция — серьёзные проблемы, требующие решения" },
    { icon: "CheckCircle", text: "Каждый из нас способен изменить отношение к пожилым — начиная с себя" },
  ];

  return (
    <div className="slide-content relative flex flex-col items-center justify-center h-full px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="geo-circle-1" />
        <div className="geo-ring-1" />
        <div className="geo-diag-line" />
        <div className="geo-mesh" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto w-full" style={{ animation: "fadeUp 0.7s ease both" }}>
        <div className="label-pill mb-6">Заключение</div>
        <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-2 leading-tight">
          Итог:
          <span className="text-gold"> уважение начинается</span>
          <br />с каждого из нас
        </h2>
        <div className="divider-gold my-6" />
        <div className="space-y-3 mb-10">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4" style={{ animationDelay: `${i * 0.1}s`, animation: "fadeUp 0.6s ease both" }}>
              <Icon name={p.icon} size={18} className="text-gold mt-1 flex-shrink-0" fallback="Check" />
              <p className="font-body text-white/80 text-base leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="p-5 border border-gold/30 bg-gold/5 rounded-sm text-center">
          <p className="font-display text-xl md:text-2xl text-white/90 italic leading-relaxed">
            «Молодость — это дар природы, старость — произведение искусства»
          </p>
          <p className="font-body text-white/35 text-sm mt-2">— Станислав Ежи Лец</p>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="label-pill">Подсухин Алексей · Антонов Тимур · 112 ЛД</div>
        </div>
      </div>
    </div>
  );
}

const slideComponents: Record<string, React.FC> = {
  title: TitleSlide,
  problem: ProblemSlide,
  stats: StatsSlide,
  positive: PositiveSlide,
  morality: MoralitySlide,
  final: FinalSlide,
  conclusion: ConclusionSlide,
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= slides.length || transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTransitioning(false);
      }, 300);
    },
    [transitioning]
  );

  useEffect(() => {
    if (!timerRunning) return;
    const id = setInterval(() => {
      setElapsed((e) => {
        if (e >= TOTAL_SECONDS) {
          clearInterval(id);
          setTimerRunning(false);
          return TOTAL_SECONDS;
        }
        return e + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timerRunning]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
      if (e.key === "f" || e.key === "F") toggleFullscreen();
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, goTo, toggleFullscreen, isFullscreen]);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const timerPct = (elapsed / TOTAL_SECONDS) * 100;
  const SlideComp = slideComponents[slides[current].type];

  return (
    <div className="pres-root">
      {/* Slide stage */}
      <div className={`pres-stage ${transitioning ? "pres-exit" : "pres-enter"}`}>
        <SlideComp />
      </div>

      {/* Top bar */}
      <div className="pres-topbar">
        <div className="flex items-center gap-3">
          <span className="font-body text-sm">
            <span className="text-gold font-semibold">{String(current + 1).padStart(2, "0")}</span>
            <span className="text-white/30"> / {String(slides.length).padStart(2, "0")}</span>
          </span>
          <span className="font-body text-white/40 text-sm hidden md:block">{slides[current].label}</span>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={handlePrint} className="timer-ctrl-btn" title="Сохранить как PDF">
            <Icon name="Download" size={13} className="text-white/60" fallback="Circle" />
          </button>
          <button onClick={toggleFullscreen} className="timer-ctrl-btn" title={isFullscreen ? "Выйти из полноэкранного" : "Полноэкранный режим"}>
            <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={13} className="text-white/60" fallback="Circle" />
          </button>
          <div className="w-px h-5 bg-white/10 mx-1" />
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ffffff15" strokeWidth="2.5" />
              <circle
                cx="18" cy="18" r="15.9" fill="none"
                stroke="#C9A84C" strokeWidth="2.5"
                strokeDasharray={`${timerPct} ${100 - timerPct}`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-body text-white/70 text-[9px] leading-none">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>
          <button onClick={() => setTimerRunning((r) => !r)} className="timer-ctrl-btn">
            <Icon name={timerRunning ? "Pause" : "Play"} size={13} className="text-white/70" fallback="Circle" />
          </button>
          {elapsed > 0 && (
            <button onClick={() => { setElapsed(0); setTimerRunning(false); }} className="timer-ctrl-btn">
              <Icon name="RotateCcw" size={13} className="text-white/40" fallback="Circle" />
            </button>
          )}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="pres-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            title={s.label}
            className={`pres-dot ${i === current ? "pres-dot-active" : ""}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button onClick={() => goTo(current - 1)} disabled={current === 0} className="pres-arrow pres-arrow-l">
        <Icon name="ChevronLeft" size={22} className="text-white/70" fallback="Circle" />
      </button>
      <button onClick={() => goTo(current + 1)} disabled={current === slides.length - 1} className="pres-arrow pres-arrow-r">
        <Icon name="ChevronRight" size={22} className="text-white/70" fallback="Circle" />
      </button>

      {/* Keyboard hint */}
      <div className="pres-kbd-hint">
        <Icon name="ArrowLeft" size={11} className="text-white/20" fallback="Circle" />
        <Icon name="ArrowRight" size={11} className="text-white/20" fallback="Circle" />
        <span className="font-body text-white/20 text-[11px] ml-1">навигация · F — полный экран</span>
      </div>
    </div>
  );
}