'use client';

import { useState, useEffect } from 'react';
import '@/src/styles/landing/general.style.scss';
import Image from 'next/image';
import { IMG_H, IMG_W } from '@/src/utils/constants/landing/images';

type Theme = 'light' | 'dark';

interface ThemedProps {
	theme: Theme;
}

const LandingContent: React.FC<ThemedProps> = ({ theme }) => {
	return (
		<div className="landing-content">
			<div className="landing-content-brief">
				<div className="landing-content-brief__title">
					<h3>Ваше пространство для общения в СНГ</h3>
				</div>
				<div className="landing-content-brief__description">
					Надёжный, быстрый и полностью доступный аналог Discord —
					создан специально для пользователей стран СНГ. Общайтесь,
					объединяйтесь и создавайте сообщества без ограничений.
				</div>
			</div>
			<div
				className={`landing-content-goals ${theme}-mode__bright-block`}
			>
				<div className="landing-content-goals__title">
					Мы не просто копируем — мы адаптируем. Наша цель —
					предоставить пользователям из СНГ стабильную, безопасную и
					удобную платформу для общения в реальном времени: от игровых
					чатов до учебных групп и профессиональных комьюнити.
				</div>
			</div>
			<div className="landing-content-functions">
				<div className="landing-content-functions-title">
					Почему выбирают нас?
				</div>

				<div className="landing-content-functions-item landing-content-functions-item_reversed">
					<div className="landing-content-functions-preview">
						<Image
							width={IMG_W}
							height={IMG_H}
							className="user-actions__img"
							src={'/landing/image2.png'}
							alt={''}
							title={'alt'}
						/>
					</div>
					<div className="landing-content-functions-item-description">
						<div className="landing-content-functions-item__title">
							Полная доступность в СНГ
						</div>
						<div className="landing-content-functions-item__text">
							Серверы расположены ближе к вам — меньше задержек,
							выше стабильность. Никаких геоблокировок и
							ограничений. Работает везде: от Минска до
							Владивостока.
						</div>
					</div>
				</div>

				<div className="landing-content-functions-item">
					<div className="landing-content-functions-preview">
						<Image
							width={IMG_W}
							height={IMG_H}
							className="user-actions__img"
							src={'/landing/image.png'}
							alt={''}
							title={'alt'}
						/>
					</div>
					<div className="landing-content-functions-item-description">
						<div className="landing-content-functions-item__title">
							Голос, видео и текст — как в Discord
						</div>
						<div className="landing-content-functions-item__text">
							Полноценные голосовые каналы, видеосвязь, обмен
							файлами, эмодзи и реакции — всё, что вы любили в
							Discord, теперь доступно локально и без риска
							отключений.
						</div>
					</div>
				</div>

				<div className="landing-content-functions-item landing-content-functions-item_reversed">
					<div className="landing-content-functions-preview">
						<Image
							width={IMG_W}
							height={IMG_H}
							className="user-actions__img"
							src={'/landing/image1.png'}
							alt={''}
							title={'alt'}
						/>
					</div>
					<div className="landing-content-functions-item-description">
						<div className="landing-content-functions-item__title">
							Поддержка на русском и других языках СНГ
						</div>
						<div className="landing-content-functions-item__text">
							Интерфейс, документация и техподдержка — на языках
							наших пользователей. Никаких языковых барьеров и
							автоматических переводов.
						</div>
					</div>
				</div>

				<div className="landing-content-functions-ending">
					Заходите и общайтесь — здесь вас всегда поймут!
				</div>
			</div>
		</div>
	);
};

const LandingFooter: React.FC<ThemedProps> = ({ theme }) => {
	return (
		<div className={`landing-footer ${theme}-mode__bright-block`}>
			<div className="landing-footer-copyrights">
				© DISCORDSUCCERS 2025
			</div>
			<div className="landing-footer-logo">
				<Image
					className="sidebar-header-logo__img"
					width={20} // вставить константу после мерджа
					height={20}
					src={'/shared/logo.png'}
					alt=""
				/>
				АлёГараж
			</div>
		</div>
	);
};

const Landing: React.FC = () => {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as Theme | null;
		if (storedTheme === 'light' || storedTheme === 'dark') {
			setTheme(storedTheme);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			setTheme(prefersDark ? 'dark' : 'light');
		}
	}, []);

	return (
		<div className={`landing-page ${theme}-mode`}>
			<LandingContent theme={theme} />
			<LandingFooter theme={theme} />
		</div>
	);
};

export default Landing;
