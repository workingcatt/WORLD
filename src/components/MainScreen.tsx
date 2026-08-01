import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function HomeSection() {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col items-center justify-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-10 px-6 mt-16"
      >
        <img 
          src="https://working-cat.org/SITE/WORLD%20%EC%A0%9C%EB%AA%A9.png" 
          alt="WORLD" 
          className="w-[90%] md:w-[1000px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] mb-6 md:mb-10" 
        />
        <p className="text-lg md:text-2xl text-cyan-100 font-light max-w-2xl leading-relaxed tracking-wide break-keep">
          본 게임은 "창작물 빙의 시뮬레이터"로서<br className="block md:hidden"/> 여러 세계관을 넘나들며 즐기는 것이 주제입니다.
        </p>
        <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-6 md:my-10"></div>
        <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light break-keep">
          빙의하는 세계들은 직접 창작하거나<br className="block md:hidden"/> 2차 창작(게임, 애니메이션 등)의 세계들입니다.<br className="hidden md:block"/>
          <br className="block md:hidden"/>차원을 넘는, 무한한 가능성의 이야기를<br className="block md:hidden"/> 직접 만들어보세요.
        </p>
      </motion.div>
    </section>
  );
}

function ExplanationSection() {
  return (
    <section id="explanation" className="min-h-screen flex flex-col justify-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{ duration: 1 }}>
          <div className="mb-12 md:mb-16 text-left">
            <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-xs md:text-base mb-4">WHAT IS WØRLD</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight break-keep">차원과 차원 사이,<br/>이야기와 이야기 사이</h2>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-4xl font-light break-keep">
              WØRLD는 하나의 세계에 머무르지 않습니다.<br className="block md:hidden"/> 안내자 '월드'가 차원의 문을 열면,<br className="hidden md:block"/>
              당신은 직접 만든 오리지널 세계부터<br className="block md:hidden"/> 좋아하는 영화·애니메이션·게임 속 세계(2차 창작)까지<br className="block md:hidden"/>
              — 그 어떤 이야기 속으로도 걸어 들어갈 수 있습니다.<br/><br className="block md:hidden"/>
              방식은 두 가지, <span className="font-bold text-white">창조 모드</span>와 <span className="font-bold text-white">빙의 모드</span>입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* 창조 모드 */}
            <div className="border border-white/10 bg-[#060b14]/60 backdrop-blur-sm p-8 md:p-12 flex flex-col h-full hover:border-cyan-500/30 transition-colors rounded-sm">
              <div className="mb-10">
                <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-sm mb-4">MODE 01</h4>
                <h3 className="text-3xl font-bold text-white tracking-wide">[ 창조 모드 ]</h3>
              </div>
              
              <div className="space-y-8 flex-grow">
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="text-cyan-400 mt-1.5 text-[10px] transform rotate-45 flex-shrink-0">◆</div>
                  <div>
                    <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-2 md:mb-3 break-keep">내가 만든 세계의 장르, 배경, 핵심을 첫 입력에 자유롭게 적어주세요.</p>
                    <p className="text-gray-400 text-xs md:text-sm italic font-light leading-relaxed break-keep">예: (아포칼립스 / 계급이 이능력 등급으로 나뉘는 디스토피아 도시 / 세계만의 규칙이나 설정)</p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="text-cyan-400 mt-1.5 text-[10px] transform rotate-45 flex-shrink-0">◆</div>
                  <p className="text-white text-base md:text-lg font-medium leading-relaxed break-keep">당신이 직접 세계관의 캐릭터를 설정하거나, AI가 자유롭게 캐릭터를 설정할 수 있습니다.</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center gap-4">
                <div className="border border-cyan-800/50 bg-[#0d1b2a] px-5 py-2.5 text-cyan-200 text-sm font-medium tracking-wider">!창조모드</div>
                <p className="text-gray-400 text-sm">를 입력하면 시작됩니다.</p>
              </div>
            </div>

            {/* 빙의 모드 */}
            <div className="border border-white/10 bg-[#060b14]/60 backdrop-blur-sm p-8 md:p-12 flex flex-col h-full hover:border-cyan-500/30 transition-colors rounded-sm">
              <div className="mb-10">
                <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-sm mb-4">MODE 02</h4>
                <h3 className="text-3xl font-bold text-white tracking-wide">[ 빙의 모드 ]</h3>
              </div>
              
              <div className="space-y-8 flex-grow">
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="text-cyan-400 mt-1.5 text-[10px] transform rotate-45 flex-shrink-0">◆</div>
                  <div>
                    <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-2 md:mb-3 break-keep">본인이 직접 원하는 원작 세계관과 빙의할 상황을 첫 입력에 자유롭게 적어주세요.</p>
                    <p className="text-gray-400 text-xs md:text-sm italic font-light leading-relaxed break-keep">(영화, 애니메이션 및 게임 등등)</p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="text-cyan-400 mt-1.5 text-[10px] transform rotate-45 flex-shrink-0">◆</div>
                  <div>
                    <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-2 md:mb-3 break-keep">이 AI 채팅은 당신의 자유로운 세계관을 위해 시작 상황에 따로 제약을 두지 않았습니다.</p>
                    <p className="text-gray-400 text-xs md:text-sm italic font-light leading-relaxed break-keep">예: (△△ 세계의 마왕으로 시작.) / (◇◇ 세계관에 불시착하며 시작) / (그 외에도 자유롭게 기입)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center gap-4">
                <div className="border border-cyan-800/50 bg-[#0d1b2a] px-5 py-2.5 text-cyan-200 text-sm font-medium tracking-wider">!빙의모드</div>
                <p className="text-gray-400 text-sm">를 입력하면 시작됩니다.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CharacterSection() {
  return (
    <section id="character" className="min-h-screen flex flex-col justify-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{ duration: 1 }}>
          <div className="mb-12 md:mb-16 text-left">
            <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-xs md:text-base mb-4">GUIDE CHARACTER</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight break-keep">당신을 세계로 이끄는 존재, 월드</h2>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-4xl font-light break-keep">
              차원을 넘나드는 정령 혹은 외신 —<br className="block md:hidden"/> 어느 쪽인지는 월드 자신도 확실히 말해주지 않습니다.<br className="hidden md:block"/>
              <br className="block md:hidden"/>확실한 건, 당신이 어떤 세계를 상상하든<br className="block md:hidden"/> 그 문을 열어줄 유일한 안내자라는 것.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch mt-12">
            {/* Character Image */}
            <div className="w-full lg:w-6/12 border border-white/10 relative flex items-center justify-center bg-[#060b14]/40 overflow-hidden rounded-sm">
              <img 
                src="https://working-cat.org/WORLD/SITE/%EB%8C%80%ED%99%94.png"
                alt="월드 캐릭터 아트"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Character Status */}
            <div className="w-full lg:w-6/12 border border-white/10 bg-[#060b14]/60 backdrop-blur-sm p-8 md:p-12 rounded-sm">
              <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-sm mb-10">CHARACTER STATUS</h4>
              
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest w-1/4 align-top">이름</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium">월드 (WØRLD)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">성별</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium">여성</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">나이</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium">
                      ??? <span className="text-gray-500 font-light ml-2 block md:inline mt-2 md:mt-0">— 외관상 17 ~ 20세로 추정</span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">머리카락</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium">은발 · 길게 땋은 머리</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">눈동자</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium">오드아이 — 푸른색 × 분홍색</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">복장</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium leading-relaxed">화이트 오프숄더 드레스 · 블랙 머플러 · 화이트 재킷 · 블랙 스타킹</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">성격</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium leading-relaxed">명랑함 · 장난기 · 능글맞음 · 활발함 · 털털함</td>
                  </tr>
                  <tr>
                    <th className="py-6 text-cyan-400 font-bold text-sm md:text-base tracking-widest align-top">특징</th>
                    <td className="py-6 text-white text-base md:text-lg align-top font-medium leading-relaxed">차원을 넘나드는 존재(정령 혹은 외신) · 당신의 빙의를 돕는 조력자</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorldsSection() {
  return (
    <section id="worlds" className="min-h-screen flex flex-col justify-center py-24 relative bg-[#02050a]/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{ duration: 1 }}>
          <div className="mb-16 text-center">
            <h4 className="text-cyan-400 font-bold tracking-[0.2em] text-sm md:text-base mb-4">INFINITE POSSIBILITIES</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">수천 개의 우주, 수만 개의 서사</h2>
            <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto">
              장르의 경계를 넘어 당신이 상상할 수 있는 모든 곳이 무대가 됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "SF / 디스토피아", desc: "네온사인이 명멸하는 거대 기업의 뒷골목, 혹은 멸망을 앞둔 인류의 마지막 항성계.", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop" },
              { title: "정통 판타지 / 마법", desc: "고대 드래곤이 깨어나는 마법 학교, 신성한 기사단과 어둠의 마왕이 대립하는 중세 세계.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" },
              { title: "포스트 아포칼립스", desc: "문명이 무너진 잿빛 도시. 부족한 자원을 두고 벌어지는 약육강식의 생존 서바이벌.", img: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1000&auto=format&fit=crop" }
            ].map((world, idx) => (
              <div key={idx} className="group relative h-[400px] overflow-hidden rounded-sm border border-white/10 hover:border-cyan-500/50 transition-all">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 mix-blend-luminosity" style={{backgroundImage: `url('${world.img}')`}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/80 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="w-8 h-[1px] bg-cyan-500 mb-4 transition-all duration-300 group-hover:w-16"></div>
                  <h3 className="text-2xl font-bold text-white mb-3">{world.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{world.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="min-h-[80vh] flex flex-col justify-center py-24 relative">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{ duration: 1 }}>
          <div className="border border-white/10 bg-[#060b14]/50 backdrop-blur-md px-6 py-20 text-center rounded-sm">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mb-12"
            >
              <img 
                src="https://working-cat.org/SITE/WORLD%20%ED%91%9C%EC%A7%80.png" 
                alt="WORLD Cover" 
                className="w-[260px] md:w-[320px] mx-auto rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
              />
            </motion.div>

            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
              <div className="w-2 h-2 rotate-45 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">지금, 첫 번째 세계의 문이 열립니다.</h2>
            <p className="text-gray-400 text-base md:text-xl font-light mb-16">당신이 원하는 플랫폼을 선택해 월드와의 첫 대화를 시작하세요.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="https://share.crack.wrtn.ai/qfg4o6" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto group relative px-8 py-4 bg-[#0a1426] border border-cyan-800/50 hover:border-cyan-400 transition-all rounded-sm overflow-hidden flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/0 via-cyan-900/10 to-cyan-900/0 group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full"></div>
                <span className="text-white font-medium tracking-widest text-sm md:text-base z-10">CRACK으로 접속</span>
              </a>
              
              <a href="https://www.babechat.ai/character/u/4121325b-2bfe-489a-bb8e-66b3a2623779/profile" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto group relative px-8 py-4 bg-[#0a1426] border border-cyan-800/50 hover:border-cyan-400 transition-all rounded-sm overflow-hidden flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/0 via-cyan-900/10 to-cyan-900/0 group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full"></div>
                <span className="text-white font-medium tracking-widest text-sm md:text-base z-10">BABE CHAT으로 접속</span>
              </a>

              <a href="https://chatple.live/content/1323" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto group relative px-8 py-4 bg-[#0a1426] border border-cyan-800/50 hover:border-cyan-400 transition-all rounded-sm overflow-hidden flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/0 via-cyan-900/10 to-cyan-900/0 group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full"></div>
                <span className="text-white font-medium tracking-widest text-sm md:text-base z-10">CHATPLE로 접속</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center border-t border-white/5 bg-[#03060a]">
      <h2 className="text-xl font-bold text-white tracking-[0.2em] mb-4 font-cinzel">WØRLD</h2>
      <p className="text-xs text-gray-600 font-light">© 2026 WORLD Studio. 당신만의 무한한 가능성을 품은 세계로.</p>
    </footer>
  );
}

export function MainScreen() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'explanation', 'character'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#040914] text-white relative font-sans overflow-x-hidden">
      {/* Background image layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="https://working-cat.org/SITE/WORLD%20BACK.png" className="w-full h-full object-cover opacity-80" alt="Space Background" />
        <div className="absolute inset-0 bg-[#040914]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040914]/80 via-[#040914]/30 to-[#040914]/90"></div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-200 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: Math.random() * 0.3 + 0.1,
                scale: Math.random() * 2,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Sleek Minimal Navigation */}
        <header 
          className={`w-full fixed top-0 z-50 transition-all duration-300 pointer-events-none ${
            isScrolled 
              ? 'bg-[#040914]/90 backdrop-blur-md border-b border-white/5 py-3 md:py-4 pointer-events-auto' 
              : 'bg-transparent py-6 md:py-8'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
            <div className={`w-full md:w-auto flex justify-center items-center transition-all duration-500 absolute md:relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:transform-none -z-10 md:z-10 ${
              isScrolled ? 'h-32 md:h-28 opacity-35 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'h-0 opacity-0 overflow-hidden m-0 pointer-events-none'
            }`}>
              <img 
                src="https://working-cat.org/SITE/WORLD%20%EC%A0%9C%EB%AA%A9.png" 
                alt="WORLD" 
                className="object-contain h-full w-[350px] md:w-auto cursor-pointer pointer-events-auto"
                onClick={() => scrollTo('home')}
              />
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8 w-full md:w-auto relative z-50 pointer-events-auto py-1 md:py-0">
              {[
                { id: 'home', label: '메인' },
                { id: 'explanation', label: 'WORLD 설명' },
                { id: 'character', label: '캐릭터' },
              ].map((tab, idx, arr) => (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => scrollTo(tab.id)}
                    className={`whitespace-nowrap text-xs md:text-sm tracking-widest transition-colors duration-300 ${
                      activeSection === tab.id
                        ? 'text-white font-medium'
                        : 'text-gray-400 hover:text-cyan-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                  {idx < arr.length - 1 && <span className="text-gray-700 text-sm hidden md:inline">/</span>}
                </React.Fragment>
              ))}
            </nav>

            <div className="flex-shrink-0 hidden md:block pointer-events-auto">
              <button 
                onClick={() => scrollTo('cta')}
                className="bg-[#62aeb8] hover:bg-[#4d939c] text-[#040914] font-bold px-6 py-2.5 text-sm tracking-wider transition-colors rounded-sm shadow-[0_0_15px_rgba(98,174,184,0.3)]"
              >
                지금 플레이
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow">
          <HomeSection />
          <ExplanationSection />
          <WorldsSection />
          <CharacterSection />
          <CtaSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

