import React from 'react'
import * as SvgIconsComponent from '../components/icons';

/**
 * Icons Component map.
 *
 * @param {string} name Icon Name.
 * @returns {*}
 */
export const getIconComponentByName = ( name, color ) => {
	const ComponentsMap = {
        github: SvgIconsComponent.GithubIcon,
        soundcloud: SvgIconsComponent.SoundcloudIcon,
        society6: SvgIconsComponent.Society6Icon,
        spotify: SvgIconsComponent.SpotifyIcon,
        dribbble: SvgIconsComponent.DribbbleIcon,
        behance: SvgIconsComponent.BehanceIcon,
        instagram: SvgIconsComponent.InstagramIcon,
        linkedin: SvgIconsComponent.LinkedinIcon,
        mixcloud: SvgIconsComponent.MixcloudIcon,
        redbubble: SvgIconsComponent.RedbubbleIcon,
        twitter: SvgIconsComponent.TwitterIcon,
        zazzle: SvgIconsComponent.ZazzleIcon,
	};

	if ( name in ComponentsMap ) {
		const IconComponent = ComponentsMap[name];
		return <IconComponent title={`${name} icon`} fill={color} />;
	} else {
		return null;
	}
};
