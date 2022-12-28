/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes }) {
	const {
		content,
		contentTitle,
		align,
		backgroundColor,
		textColor,
		kaLink,
		linkLabel,
		hasLinkNofollow,
	} = attributes;
	const blockProps = useBlockProps.save({
		className: `has-text-align-${align}`,
	});

	return (
		<div {...blockProps} style={{ backgroundColor: backgroundColor }}>
			<RichText.Content
				tagName="h1"
				value={contentTitle}
				style={{ color: textColor }}
			/>
			<RichText.Content
				tagName="p"
				value={content}
				style={{ color: textColor }}
			/>
			<p>
				<a
					href={kaLink}
					className="ka-button"
					rel={hasLinkNofollow ? "nofollow" : "noopener noreferrer"}
				>
					{linkLabel}
				</a>
			</p>
		</div>
	);
}