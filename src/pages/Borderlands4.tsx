
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu, X, Zap, Shield, Sword, Users, Calendar, Trophy } from 'lucide-react';

const Borderlands4 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'background', label: 'Background' },
  { id: 'gameplay', label: 'Gameplay' },
  { id: 'features', label: 'Features' },
  { id: 'news', label: 'News' },
  { id: 'history', label: 'History' },
  { id: 'faq', label: 'FAQ' }];


  const gameplayFeatures = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" data-id="u9pq3gfab" data-path="src/pages/Borderlands4.tsx" />,
    title: "Weapon Fusion System",
    description: "Combine weapons to create unique hybrid firearms with unprecedented power and abilities."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" data-id="9yjc2sqph" data-path="src/pages/Borderlands4.tsx" />,
    title: "Dynamic Shield Tech",
    description: "Adaptive shields that evolve based on damage taken, providing strategic defensive options."
  },
  {
    icon: <Sword className="w-8 h-8 text-red-400" data-id="xfhq2qekp" data-path="src/pages/Borderlands4.tsx" />,
    title: "Elemental Mastery",
    description: "Master six different elemental damage types with unique environmental interactions."
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" data-id="dch446rki" data-path="src/pages/Borderlands4.tsx" />,
    title: "4-Player Co-op",
    description: "Team up with friends in seamless drop-in/drop-out cooperative gameplay."
  }];


  const specialFeatures = [
  {
    title: "Open World Exploration",
    description: "Seamless planetary zones to explore\nBranching missions with freedom of progression\nSupports solo, co-op, and online multiplayer modes",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop"
  },
  {
    title: "Advanced AI & Gameplay Systems",
    description: "Smarter enemy AI for more dynamic combat\nSmart gun mods: adaptive damage & status effects\n",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwaW1hZ2UlMjBzaG93Y2FzaW5nJTIwYSUyMG5hdHVyYWwlMjBlbnZpcm9ubWVudCUyQyUyMHBvc3NpYmx5JTIwYSUyMGZvcmVzdCUyMG9yJTIwYSUyMHNpbWlsYXIlMjBvdXRkb29yJTIwc2V0dGluZy58ZW58MHx8fHwxNzQ5NjYxNDEzfDA&ixlib=rb-4.1.0&q=80&w=200$w=400"
  },
  {
    title: "Guild System",
    description: "Join player guilds, compete in tournaments, and climb the leaderboards.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop"
  }];


  const newsItems = [
  {
    date: "Jun. 13, 2025",
    title: <a href="https://www.gamesradar.com/games/borderlands/borderlands-4-is-turning-out-to-be-better-than-borderlands-3-by-every-measurement-we-have-including-subjective-ones-gearbox-boss-randy-pitchford-teases/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Borderlands 4 is "turning out to be better" than Borderlands 3 "by every measurement we have, including subjective ones," Gearbox boss Randy Pitchford teases</a>,
    description: "Gearbox CEO Randy Pitchford recently teased that Borderlands 4 is shaping up to be 'better' than Borderlands 3 'by every measurement we have, including subjective ones.' He also mentioned that the game's release date has been moved up by 11 days to September 12, 2025, because 'the game is awesome, the team is cooking,' and a dedicated State of Play is 'imminently' coming."
  },
  {
    date: "Jun. 11, 2025",
    title: <a href="https://www.gamespot.com/articles/borderlands-4-video-shows-how-vault-hunters-are-made/1100-6532441/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Borderlands 4 Video Shows How Vault Hunters Are Made</a>,
    description: "Gearbox Software has released a new YouTube series, 'Beyond the Borderlands,' with its first episode focusing on the creation process of Vault Hunters. Art director Adam May explained their aim to create characters that resonate with both players and the development team, often referencing comic book heroes. Lead character designer Nick Thurston emphasized that the guiding principle for Borderlands is simply to 'be badass,' ensuring all abilities and gear meet community expectations."
  },
  {
    date: "Jun. 9, 2025",
    title: <a href="https://www.eurogamer.net/with-borderlands-4-nearly-here-a-community-of-archivists-are-racing-to-revive-a-dead-borderlands-mmo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">With Borderlands 4 nearly here, a community of archivists are racing to revive a dead Borderlands MMO</a>,
    description: "As Borderlands 4 approaches its release, a community of archivists is attempting to revive an unreleased Borderlands MMO project. The team successfully found a public build and is working to make it playable. Despite facing potential copyright issues and a substantial amount of work, nearly 100 players have offered their help since the project went public. Their goal is to get a playable community build up and running before the official launch of Borderlands 4."
  }];


  const historyTimeline = [
  {
    year: "Oct. 2009",
    title: "The Birth of Borderlands",
    description: "Gearbox Software releases the original Borderlands, creating a new genre of \"looter-shooter\" with its unique gameplay, distinct cel-shaded art style, and dark humor."
  },
  {
    year: "Sep. 2012",
    title: "The Monumental Success of Borderlands 2",
    description: "Regarded by many as the pinnacle of the series, Borderlands 2 wins over gamers worldwide with its charismatic villain, Handsome Jack, a richer story, and refined systems, selling over 10 million copies."
  },
  {
    year: "Oct. 2014",
    title: "The Pre-Sequel's Exploration",
    description: "This installment fills the story gap between the first two games, allowing players to step into the shoes of previous NPCs and introducing new mechanics like low gravity and oxygen kits."
  },
  {
    year: "Sep. 2019",
    title: "The Grand Return of Borderlands 3",
    description: "After a long wait, the next mainline entry makes its return. Borderlands 3 delivers vastly improved gunplay, expansive interstellar travel, and more diverse skill trees, reigniting the passion of Vault Hunters globally."
  },
  {
    year: "Early 2023",
    title: "\"Project Next-Mayhem\" Is Secretly Initiated",
    description: "After completing DLC development for Borderlands 3, the core team at Gearbox officially begins development on the next mainline sequel. The project's goal is to leverage the full potential of next-gen consoles to create an unprecedented, dynamic Borderlands universe."
  },
  {
    year: "Jun. 2025",
    title: "Borderlands 4 Global Reveal",
    description: "At the Summer Game Fest, Gearbox stuns the world with a gameplay reveal, officially announcing Borderlands 4 for a release in the second half of 2025, promising a galaxy-spanning looting spree."
  }];


  const faqItems = [
  {
    question: "When will Borderlands 4 be released?",
    answer: "Borderlands 4 is currently in development with a planned release window of late 2024. Stay tuned for official announcements from Gearbox Software."
  },
  {
    question: "What platforms will Borderlands 4 be available on?",
    answer: "Borderlands 4 will be available on PC, PlayStation 5, Xbox Series X/S, and will support cross-platform play between all versions."
  },
  {
    question: "How many players can play together?",
    answer: "Borderlands 4 supports up to 4 players in cooperative gameplay, both online and split-screen on consoles."
  },
  {
    question: "Will there be a season pass?",
    answer: "Yes, a season pass will be available that includes all major DLC expansions and additional content throughout the game's post-launch period."
  },
  {
    question: "Are there any pre-order bonuses?",
    answer: "Pre-order bonuses include exclusive weapon skins, early access to the beta, and special in-game items. Check with your preferred retailer for specific offers."
  },
  {
    question: "Will save files from Borderlands 3 carry over?",
    answer: "While Borderlands 4 is a new adventure, some cosmetic items and achievements may carry over. More details will be announced closer to release."
  },
  {
    question: "What is the background setting of Borderlands 4?",
    answer: "The game is set in a distant future on the chaotic and opportunistic fringes of the universe, dominated by mega-corporations like Hyperion and Maliwan. According to legend, alien treasure caches known as \"Vaults\" are hidden on various planets, containing immense riches, alien technology, and power. Players take on the role of \"Vault Hunters,\" adventurers seeking this fame and fortune in a lawless world."
  },
  {
    question: "What is the history of the Borderlands series?",
    answer: "Borderlands, 2009: The series originator, which established the core gameplay and art style.\nBorderlands 2, 2012: Widely considered the peak of the series, famous for its excellent story and villain.\nBorderlands: The Pre-Sequel, 2014: Tells the origin story of the Borderlands 2 villain, Handsome Jack.\nBorderlands 3, 2019: Expanded the setting from Pandora to a galaxy of planets and significantly upgraded the gunplay experience."
  },
  {
    question: "What are the core gameplay elements of Borderlands 4?",
    answer: "The core gameplay is \"Looter-Shooter.\" Specifically, players gain experience to level up by completing quests and defeating enemies, while constantly acquiring procedurally generated weapons and gear. The game encourages players to \"farm\" powerful enemies for better loot, then use that superior gear to tackle more challenging content. This loop combines the thrill of a First-Person Shooter (FPS) with the character growth and build customization of a Role-Playing Game (RPG)."
  },
  {
    question: "Who is the developer and what are the tech strengths of Borderlands 4?",
    answer: "The developer is Gearbox Software. Their key technical strengths are:\nUnique Art Style: They pioneered and perfected a \"Concept-Art-Come-To-Life\" cel-shading technique, giving their games a stylized, comic-book appearance that is rich in detail and depth.\nProcedural Content Generation (PCG): They are an industry leader in the procedural generation of weapons and gear. Their algorithms can create a near-infinite variety of loot with different stats and visual combinations, which is the core of the \"looting\" fun."
  },
  {
    question: "What are the system requirements of Borderlands 4?",
    answer: "Not officially released, but expected to align with UE5-based specs above Borderlands 3:\nMinimum: i5 / Ryzen 5, 16GB RAM, RTX 2060 / RX 5600"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white" data-id="796la20p6" data-path="src/pages/Borderlands4.tsx">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/30" data-id="mve7cap0u" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="4aiareuca" data-path="src/pages/Borderlands4.tsx">
          <div className="flex justify-between items-center h-16" data-id="xt60fdm55" data-path="src/pages/Borderlands4.tsx">
            <div className="flex items-center" data-id="oiajituq9" data-path="src/pages/Borderlands4.tsx">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" data-id="6mfpf13ny" data-path="src/pages/Borderlands4.tsx">
                BORDERLANDS 4
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block" data-id="con1nlav5" data-path="src/pages/Borderlands4.tsx">
              <div className="flex space-x-8" data-id="hji0hmffz" data-path="src/pages/Borderlands4.tsx">
                {navigationItems.map((item) =>
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium" data-id="u6qji313y" data-path="src/pages/Borderlands4.tsx">

                    {item.label}
                  </button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden" data-id="cgk1ggyj5" data-path="src/pages/Borderlands4.tsx">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2" data-id="f9iumqcfz" data-path="src/pages/Borderlands4.tsx">

                {mobileMenuOpen ? <X size={24} data-id="s3gyvxgo7" data-path="src/pages/Borderlands4.tsx" /> : <Menu size={24} data-id="ckqndeqds" data-path="src/pages/Borderlands4.tsx" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen &&
        <div className="md:hidden bg-black/90 backdrop-blur-md" data-id="xhk7w3ii7" data-path="src/pages/Borderlands4.tsx">
            <div className="px-2 pt-2 pb-3 space-y-1" data-id="lixwl9ixr" data-path="src/pages/Borderlands4.tsx">
              {navigationItems.map((item) =>
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left" data-id="rv8um093s" data-path="src/pages/Borderlands4.tsx">

                  {item.label}
                </button>
            )}
            </div>
          </div>
        }
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-id="rdio30cqk" data-path="src/pages/Borderlands4.tsx">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20" data-id="1awkdetul" data-path="src/pages/Borderlands4.tsx" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30" data-id="b9toq6ai7" data-path="src/pages/Borderlands4.tsx" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" data-id="vmpa7v52e" data-path="src/pages/Borderlands4.tsx">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent animate-pulse" data-id="ga5ick7wu" data-path="src/pages/Borderlands4.tsx">
            BORDERLANDS 4
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-yellow-300 font-semibold" data-id="jayw9z1rg" data-path="src/pages/Borderlands4.tsx">
            "Guns, Vaults and Chaos have no limits. Neither do you"
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto" data-id="c11cbi8pc" data-path="src/pages/Borderlands4.tsx">
            Return to the mayhem with the most ambitious Borderlands adventure yet. 
            Explore infinite worlds, master revolutionary weapons, and face the ultimate threat to the galaxy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="qc96z0lcj" data-path="src/pages/Borderlands4.tsx">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold px-8 py-4 text-lg"
              onClick={() => scrollToSection('features')} data-id="pucusregr" data-path="src/pages/Borderlands4.tsx">

              Discover Features
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 text-lg"
              onClick={() => scrollToSection('news')} data-id="3ihcwcj9c" data-path="src/pages/Borderlands4.tsx">

              Latest News
            </Button>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="py-20 px-4 sm:px-6 lg:px-8" data-id="a3995y3h3" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-6xl mx-auto" data-id="zmyb97krf" data-path="src/pages/Borderlands4.tsx">
          <div className="text-center mb-16" data-id="tuzv1eoxq" data-path="src/pages/Borderlands4.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" data-id="qdxmnrnh4" data-path="src/pages/Borderlands4.tsx">
              The Story Continues
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-id="6zrzaxgn4" data-path="src/pages/Borderlands4.tsx">
              Years after the events of Borderlands 3, the galaxy faces a new threat that makes the Calypso Twins look like small-time bandits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center" data-id="apd6nlht7" data-path="src/pages/Borderlands4.tsx">
            <div data-id="vnooflc70" data-path="src/pages/Borderlands4.tsx">
              <img
                src="https://images.unsplash.com/photo-1494625927555-6ec4433b1571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwbGFuZHNjYXBlJTIwaW1hZ2UlMjBzaG93Y2FzaW5nJTIwYSUyMG5hdHVyYWwlMjBlbnZpcm9ubWVudCUyQyUyMHBvc3NpYmx5JTIwYSUyMGZvcmVzdCUyMG9yJTIwYSUyMHNpbWlsYXIlMjBvdXRkb29yJTIwc2V0dGluZy58ZW58MHx8fHwxNzQ5NjYxNDExfDA&ixlib=rb-4.1.0&q=80&w=200$w=600"
                alt="Borderlands 4 Landscape"
                className="rounded-lg shadow-2xl" data-id="zswoaqh1v" data-path="src/pages/Borderlands4.tsx" />

            </div>
            <div data-id="w73gha5gm" data-path="src/pages/Borderlands4.tsx">
              <h3 className="text-2xl font-bold mb-6 text-orange-400" data-id="ogscey9a8" data-path="src/pages/Borderlands4.tsx">A Galaxy in Peril</h3>
              <p className="text-gray-300 mb-6 leading-relaxed" data-id="nzhlypy4k" data-path="src/pages/Borderlands4.tsx">
                The Vaults across the galaxy are opening simultaneously, releasing ancient horrors that threaten to consume everything. 
                As a new generation of Vault Hunters, you must master unprecedented powers and forge unlikely alliances to prevent 
                the universe from falling into eternal darkness.
              </p>
              <p className="text-gray-300 leading-relaxed" data-id="9i1f0t84d" data-path="src/pages/Borderlands4.tsx">
                Explore diverse worlds from crystalline ice planets to volcanic forge worlds, each harboring unique challenges, 
                treasures, and secrets that will test your skills and determination. The fate of countless civilizations rests in your hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-purple-500/30" data-id="ikhvugcal" data-path="src/pages/Borderlands4.tsx" />

      {/* Gameplay Section */}
      <section id="gameplay" className="py-20 px-4 sm:px-6 lg:px-8" data-id="gnlgsaju1" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-6xl mx-auto" data-id="5z2jqs1aw" data-path="src/pages/Borderlands4.tsx">
          <div className="text-center mb-16" data-id="j3e0ciypi" data-path="src/pages/Borderlands4.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent" data-id="rkmxnca4e" data-path="src/pages/Borderlands4.tsx">
              Revolutionary Gameplay
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-id="fo1xq8145" data-path="src/pages/Borderlands4.tsx">
              Experience the most dynamic and engaging Borderlands gameplay ever created, with innovative mechanics that redefine the looter shooter genre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="4g2col5qt" data-path="src/pages/Borderlands4.tsx">
            {gameplayFeatures.map((feature, index) =>
            <Card key={index} className="bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300" data-id="3r6oo7sxn" data-path="src/pages/Borderlands4.tsx">
                <CardHeader className="text-center" data-id="3sbo3dftn" data-path="src/pages/Borderlands4.tsx">
                  <div className="flex justify-center mb-4" data-id="ewrnoxj49" data-path="src/pages/Borderlands4.tsx">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white" data-id="zcylfk81u" data-path="src/pages/Borderlands4.tsx">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent data-id="b0hkby873" data-path="src/pages/Borderlands4.tsx">
                  <p className="text-gray-300 text-center" data-id="i8y5pzvw5" data-path="src/pages/Borderlands4.tsx">{feature.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Separator className="bg-purple-500/30" data-id="9b3zr2c8o" data-path="src/pages/Borderlands4.tsx" />

      {/* Special Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-id="mc3t21tym" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-6xl mx-auto" data-id="8ilc4p841" data-path="src/pages/Borderlands4.tsx">
          <div className="text-center mb-16" data-id="fh7t24voy" data-path="src/pages/Borderlands4.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" data-id="4ss8nh0yj" data-path="src/pages/Borderlands4.tsx">
              Special Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-id="b4uqji7ys" data-path="src/pages/Borderlands4.tsx">
              Discover groundbreaking features that set Borderlands 4 apart from any game in the series.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" data-id="394vbcrih" data-path="src/pages/Borderlands4.tsx">
            {specialFeatures.map((feature, index) =>
            <Card key={index} className="bg-gray-800/50 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 overflow-hidden" data-id="hmu6zodem" data-path="src/pages/Borderlands4.tsx">
                <div className="aspect-video overflow-hidden" data-id="qc9r2svjt" data-path="src/pages/Borderlands4.tsx">
                  <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-id="cqlrvm030" data-path="src/pages/Borderlands4.tsx" />

                </div>
                <CardHeader data-id="2mlxollzh" data-path="src/pages/Borderlands4.tsx">
                  <CardTitle className="text-xl text-white" data-id="27x3h5ng6" data-path="src/pages/Borderlands4.tsx">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent data-id="gqq6b170f" data-path="src/pages/Borderlands4.tsx">
                  <p className="text-gray-300" data-id="5lkjbcyhh" data-path="src/pages/Borderlands4.tsx">{feature.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Separator className="bg-purple-500/30" data-id="xt9e136t6" data-path="src/pages/Borderlands4.tsx" />

      {/* Latest News Section */}
      <section id="news" className="py-20 px-4 sm:px-6 lg:px-8" data-id="93jo3o0cg" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-6xl mx-auto" data-id="5yzr6kk3v" data-path="src/pages/Borderlands4.tsx">
          <div className="text-center mb-16" data-id="qcpkiqlvq" data-path="src/pages/Borderlands4.tsx">
            <div className="flex flex-col items-center" data-id="latest-news-header">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-id="x7jm9cr29" data-path="src/pages/Borderlands4.tsx">
                Latest News
              </h2>
              <p className="text-gray-400 text-sm mb-6">Last updated: Jun. 13, 2025</p>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-id="pjzu5sgfk" data-path="src/pages/Borderlands4.tsx">
              Stay updated with the latest developments, announcements, and behind-the-scenes insights.
            </p>
          </div>

          <div className="space-y-6" data-id="y109k5aa6" data-path="src/pages/Borderlands4.tsx">
            {newsItems.map((news, index) =>
            <Card key={index} className="bg-gray-800/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300" data-id="854nz2crz" data-path="src/pages/Borderlands4.tsx">
                <CardHeader data-id="8ezi9vb5y" data-path="src/pages/Borderlands4.tsx">
                  <div className="flex items-center justify-between" data-id="q8ad1bidz" data-path="src/pages/Borderlands4.tsx">
                    <CardTitle className="text-xl text-white" data-id="l6z4vrixl" data-path="src/pages/Borderlands4.tsx">{news.title}</CardTitle>
                    <Badge variant="outline" className="border-blue-400 text-blue-400" data-id="u3m458b9y" data-path="src/pages/Borderlands4.tsx">
                      <Calendar className="w-4 h-4 mr-1" data-id="7pwz4opq5" data-path="src/pages/Borderlands4.tsx" />
                      {news.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent data-id="jdl05qy6j" data-path="src/pages/Borderlands4.tsx">
                  <p className="text-gray-300" data-id="87sg9oxmq" data-path="src/pages/Borderlands4.tsx">{news.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Separator className="bg-purple-500/30" data-id="gfsfzpr5o" data-path="src/pages/Borderlands4.tsx" />

      {/* History & Evolution Section */}
      <section id="history" className="py-20 px-4 sm:px-6 lg:px-8" data-id="u5ijuj0na" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-6xl mx-auto" data-id="i1xnut5as" data-path="src/pages/Borderlands4.tsx">
          <div className="text-center mb-16" data-id="7bhimenc9" data-path="src/pages/Borderlands4.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent" data-id="7pva2jrzv" data-path="src/pages/Borderlands4.tsx">
              History & Evolution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto" data-id="5073tq7gi" data-path="src/pages/Borderlands4.tsx">
              Trace the evolution of the Borderlands franchise from its humble beginnings to the epic adventure that awaits.
            </p>
          </div>

          <div className="space-y-8" data-id="cmhfe4dj2" data-path="src/pages/Borderlands4.tsx">
            {historyTimeline.map((item, index) =>
            <div key={index} className="flex items-start space-x-6" data-id="y8bam5aas" data-path="src/pages/Borderlands4.tsx">
                <div className="flex-shrink-0" data-id="edm8z5xy5" data-path="src/pages/Borderlands4.tsx">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" data-id="zog2zsj24" data-path="src/pages/Borderlands4.tsx">
                    <Trophy className="w-6 h-6 text-white" data-id="0f7ijt3yf" data-path="src/pages/Borderlands4.tsx" />
                  </div>
                </div>
                <div className="flex-1" data-id="ay6wxwqzi" data-path="src/pages/Borderlands4.tsx">
                  <Card className="bg-gray-800/50 border-red-500/30" data-id="t9gw0cq65" data-path="src/pages/Borderlands4.tsx">
                    <CardHeader data-id="xleuit5jd" data-path="src/pages/Borderlands4.tsx">
                      <div className="flex items-center space-x-4" data-id="9ebu8pjue" data-path="src/pages/Borderlands4.tsx">
                        <Badge variant="outline" className="border-red-400 text-red-400 text-lg px-3 py-1" data-id="4qz389fe2" data-path="src/pages/Borderlands4.tsx">
                          {item.year}
                        </Badge>
                        <CardTitle className="text-xl text-white" data-id="uhrxea5f1" data-path="src/pages/Borderlands4.tsx">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent data-id="h0czt1qke" data-path="src/pages/Borderlands4.tsx">
                      <p className="text-gray-300" data-id="lso3tih3s" data-path="src/pages/Borderlands4.tsx">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Separator className="bg-purple-500/30" data-id="2r6kd6xup" data-path="src/pages/Borderlands4.tsx" />

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8" data-id="33lgg435l" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-4xl mx-auto" data-id="r1lyia6js" data-path="src/pages/Borderlands4.tsx">
          <div className="text-center mb-16" data-id="bqqbf7lo0" data-path="src/pages/Borderlands4.tsx">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" data-id="r1whn9n7v" data-path="src/pages/Borderlands4.tsx">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300" data-id="rme2sq8tc" data-path="src/pages/Borderlands4.tsx">
              Get answers to the most common questions about Borderlands 4.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" data-id="7mct2mfle" data-path="src/pages/Borderlands4.tsx">
            {faqItems.map((item, index) =>
            <AccordionItem key={index} value={`item-${index}`} className="border-purple-500/30" data-id="snmv7r8lu" data-path="src/pages/Borderlands4.tsx">
                <AccordionTrigger className="text-left text-white hover:text-purple-400 transition-colors" data-id="ndfj0kfsh" data-path="src/pages/Borderlands4.tsx">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300" data-id="y05n0h4uf" data-path="src/pages/Borderlands4.tsx">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-purple-500/30 py-12 px-4 sm:px-6 lg:px-8" data-id="m41mock8d" data-path="src/pages/Borderlands4.tsx">
        <div className="max-w-6xl mx-auto text-center" data-id="0b218xq23" data-path="src/pages/Borderlands4.tsx">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" data-id="156fws2wp" data-path="src/pages/Borderlands4.tsx">
            BORDERLANDS 4
          </h3>
          <p className="text-gray-400 mb-8" data-id="l2jo43boz" data-path="src/pages/Borderlands4.tsx">
            Guns, Vaults and Chaos have no limits. Neither do you
          </p>
          <div className="flex justify-center space-x-6 mb-8" data-id="8d4gw3tkr" data-path="src/pages/Borderlands4.tsx">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black" data-id="7b2dnjq88" data-path="src/pages/Borderlands4.tsx">
              Pre-Order Now
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black" data-id="dajcyjhfz" data-path="src/pages/Borderlands4.tsx">
              Join Beta
            </Button>
          </div>
          <p className="text-gray-500 text-sm" data-id="z5jcsdpue" data-path="src/pages/Borderlands4.tsx">
            © 2024 Gearbox Software. All rights reserved. Borderlands and the Borderlands logo are trademarks of Gearbox Software.
          </p>
        </div>
      </footer>
    </div>);

};

export default Borderlands4;