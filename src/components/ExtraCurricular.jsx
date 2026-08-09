import React from 'react';
import { 
  Sparkles, 
  Share2, 
  Trophy, 
  PenTool, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';
import { extraCurricularData } from '../data/portfolioData';

const iconMap = {
  Share2: Share2,
  Trophy: Trophy,
  PenTool: PenTool,
  TrendingUp: TrendingUp
};

const ExtraCurricular = () => {
  return (
    <section className="section extracurricular-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Community & Beyond</span>
          </div>
          <h2 className="section-title">
            Extra-Curricular <span className="text-gradient">Activities</span>
          </h2>
          <p className="section-subtitle">
            Technical content sharing, competitive programming, and continuous skill building outside academics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-2 extracurricular-grid">
          {extraCurricularData.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.id} className="activity-card glass-card">
                <div className="activity-icon-box">
                  <IconComponent size={22} className="text-cyan" />
                </div>

                <div className="activity-content">
                  <h3 className="activity-title">{item.title}</h3>
                  <p className="activity-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .extracurricular-grid {
          gap: 1.5rem;
        }

        .activity-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.75rem;
        }

        .activity-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activity-content {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .activity-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .activity-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default ExtraCurricular;
