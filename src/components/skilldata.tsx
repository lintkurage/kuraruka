import React, { useState ,useEffect} from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts';
import styles from "../styles/skilldata.module.css";

interface DataPoint {
    subject: string;
    A: number;
    fullMark: number;
}

const frontdata: DataPoint[] = [
    { subject: 'HTML5', A: 4, fullMark: 5 },
    { subject: 'CSS', A: 3, fullMark: 5 },
    { subject: 'Vuejs', A: 3, fullMark: 5 },
    { subject: 'JavaScript/TypeScript', A: 4, fullMark: 5 },
    { subject: 'React', A: 4, fullMark: 5 },
    { subject: 'Next.js', A: 4, fullMark: 5 },
];

const backdata: DataPoint[] = [
    { subject: 'Python', A: 3, fullMark: 5 },
    { subject: 'Node.js', A: 4, fullMark: 5 },
    { subject: 'Ruby', A: 3, fullMark: 5 },
    { subject: 'SQL', A: 3, fullMark: 5 },
    { subject: 'C/C++', A: 3, fullMark: 5 },
    { subject: 'C#', A: 3, fullMark: 5 },
];

const tooldata: DataPoint[] = [
    { subject: 'Illustrator', A: 3, fullMark: 5 },
    { subject: 'Photoshop', A: 3, fullMark: 5 },
    { subject: 'Premiere Pro', A: 3, fullMark: 5 },
    { subject: 'Git/Git Hub', A: 3, fullMark: 5 },
    { subject: 'Fusion/Blender', A: 4, fullMark: 5 },
    { subject: 'Unity', A: 4, fullMark: 5 },
];

// カテゴリごとの色の型を定義
const categoryColors: { [key: string]: string } = {
    frontend: '#5bdef8',
    backend: '#80fba1',
    tool: '#f6746e',
};

const SkillData: React.FC = () => {

    const modilesize=768

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 初期判定
        const updateMobileView = () => {
            setIsMobile(window.innerWidth <= modilesize); 
        };

        updateMobileView();
        // リサイズイベントリスナー
        window.addEventListener("resize", updateMobileView);
        return () => window.removeEventListener("resize", updateMobileView);
    }, []);

    const [selectedCategory, setSelectedCategory] = useState<'frontend' | 'backend' | 'tool'>('frontend');

    const toggleData = (category: 'frontend' | 'backend' | 'tool') => {
        setSelectedCategory(category);
    }

    const getData = () => {
        switch (selectedCategory) {
            case 'frontend':
                return frontdata;
            case 'backend':
                return backdata;
            case 'tool':
                return tooldata;
            default:
                return frontdata;
        }
    }

    const currentData = getData();
    const currentColor = categoryColors[selectedCategory];

    let radarmargin=60

    if(isMobile==true){
        radarmargin=50
    }

    return (
        <>
            <div className={styles.textcontents}>
                <h1 className={styles.titletext}>My Skill Set</h1>
                <hr className={styles.line} />
            </div>
            <div className={styles.contents}>
                <div>
                <div className={styles.skillcontents}>
                    <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Skills</h2>
                    <div className={styles.skillcomments}>
                    <p>これまでに身につけたスキルをレーダーグラフにまとめまてみました。広く浅くですがフロントエンドからバックエンドまで幅広くスキルの上に取り組んでいます。特段これが強みというものはありませが、
                        オールランダーを目指して日々研鑽を積んでいます。幅広く、モダンな技術、知識を持ち、人に喜んでもらえるものを作る発想力がある点が強みであると感じています。
                        ただ、専門性の低さを課題としており、特にフレームワーク、バックエンド、機械学習/AI、グラフィックデザインについての専門性を高めていきたいと考えています。
                    </p>
                    </div>
                </div>
                    <div>
                        <ResponsiveContainer width="100%" height={isMobile ? 200 : 400} className={styles.recharts}>
                            <RadarChart
                             cx="50%" cy="50%" outerRadius="100%" data={currentData} 
                             margin={{
                                top: radarmargin,
                                right: radarmargin,
                                bottom: radarmargin,
                                left: radarmargin,
                              }}
                             >
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis domain={[0, 5]} />
                                <Radar
                                    name={selectedCategory}
                                    dataKey="A"
                                    stroke={currentColor}
                                    fill={currentColor}
                                    fillOpacity={0.6}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.buttoncontents}>
                        <button className={styles.toggleButtonfront} onClick={() => toggleData('frontend')}>
                            <p>Frontend</p>
                        </button>
                        <button className={styles.toggleButtonback} onClick={() => toggleData('backend')}>
                            <p>Backend</p>
                        </button>
                        <button className={styles.toggleButtontool} onClick={() => toggleData('tool')}>
                            <p>Tools</p>
                        </button>
                    </div>
                </div>
                <div className={styles.charttext}>
                    <p>チャートの見方については、「0:全く使えない,1:触ったことがある,2:授業で扱った,3:調べながら制作できる,4:ある程度のものを作れる,5:完璧に習熟している」です</p>
                </div>
            </div>
        </>
    );
};

export default SkillData;
