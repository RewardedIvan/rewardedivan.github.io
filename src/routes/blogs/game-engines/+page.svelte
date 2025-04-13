<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section title="backstory/context" id="backstory-context">
	<p>
		so i was on youtube, searching game engine tutorials to take <b>inspiration</b> from and came
		across this short by
		<a href="https://youtube.com/@PirateSoftware" class="text-indigo-500">Pirate Software</a>
	</p>
	<div class="flex flex-row gap-2">
		<iframe src="https://youtube.com/embed/3OmaWv4eoq4" height="600" title="yt shorts"></iframe>
		<p>i was like "shit he's so right." and started questioning myself.</p>
	</div>
</Section>

<Section
	title="learning..? or what i've been up to the past 2 years"
	id="learning-or-what-ive-been-up-to"
>
	<p>
		at this point i have been doing graphics programming related (and game hacking) projects for
		about 2 years now. and i must say i've learned a lot about how programmers send triangles to
		GPUs and how AAA games use little C programs to change every little pixel's color on the screen
		to make it look better.
	</p>
	<p class="mt-2">
		my experience begins with a C++ "engine" that is just an overly-abstracted object-oriented
		OpenGL wrapper. (if only i could tell myself to just go use
		<a href="https://opentk.net/" class="text-indigo-500">OpenTK + C#</a>) i mean to be fair it does
		build and run if you follow my readme.
		<a
			class="text-xs text-gray-500"
			href="https://youtube.com/playlist?list=PLlrATfBNZ98f6Z1cDNeMLL3eXaRk1WCxK"
		>
			unlike most of Cherno's code reviews (no hard feelings)
		</a>
	</p>
	<p class="mt-2 text-sm text-gray-500">
		(EXCEPT that you need to change
		<a
			href="https://github.com/RewardedIvan/bk/blob/80332ab3d3c803e9f66188405e6b29ce069cd010/examples/src/overlays/OpenGL.cpp#L48"
			class="text-indigo-500">that one cast</a
		>
		from <Code>void*</Code> to <Code>ImTextureID</Code> because the build script clones the master branch
		of imgui, which at some point had a breaking change to <Code>ImGui::Image</Code>) (and the git
		history is just...) (maybe i shouldn't have made fun of Cherno's code review reviewees)
	</p>
	<div class="flex flex-row gap-2">
		<img
			src="/blog-res/game-engines/devenv_prg4QBoba1.png"
			alt="screenshot of the &quot;engine&quot;"
			width="500"
		/>
		<div class="flex flex-col">
			<a href="https://github.com/RewardedIvan/bk" class="text-indigo-500">
				github here (just archived and publicized)
			</a>
			<p>
				maybe i never passed the <a
					href="https://learnopengl.com/Getting-started/Textures"
					class="text-indigo-500"
				>
					3<sup>rd</sup> section
				</a>
				on <a href="https://learnopengl.com/" class="text-indigo-500">LearnOpenGL.com</a>
			</p>
			<p>
				also i don't know where the texture went, but i can't find it in the git history anywhere
				lol
			</p>
		</div>
	</div>
	<p class="mt-2">
		the next projects on my journey are just unfinished attempts of games or game engines (just like
		this one) mixed with other webdev projects.
	</p>
	<p>
		at one point i tried <a href="https://rust-lang.org/" class="text-rose-600">Rust</a>
		<span class="text-xs text-gray-500">no not the game lol</span>
		but that experience deserves it's own blog post, conclusion is that i didn't really like the crates,
		but it's a nice language. (i'll give it another try some time)
	</p>
	<p>
		throughout that perior i actually learnt how 3D projections work, models, instancing and that's
		about it.
	</p>
	<p>
		in present time, i tried zig and really liked it (another topic deserving it's blog post). now
		i'm <b>trying</b> to write clones of my favorite games (cs & mc) in an attempt to learn something
		new. so far stuck on the physics part of it. (lol, note: i have been taught very little about it,
		just like linear algebra, but i manage)
	</p>
</Section>

<Section
	title="my actual reasons for writing games from scratch/engines"
	id="my-reasons-for-writing-games-from-scratch"
>
	<p>
		ok back on topic, none of my projects require anything special that any of the engines can't do.
		so there is only one option left: <b>EGO.</b>
	</p>
	<p>i can't entirely deny that and i know i'm stupid, (lol) but my main reason is because:</p>
	<b>&emsp;&emsp;i just don't like engines</b>
	<p>
		not that there is anything wrong with them, but
		<a href="https://en.wikipedia.org/wiki/Entity_component_system" class="text-indigo-500">ECS</a
		>-es, the patterns they use, their scripting languages are not for me.
	</p>
	<b>so then what do i like?</b>
	<p>
		i like having control of everything, for example i make my own blog, (even tho i use github
		pages but that's fine for me)
	</p>
	<p>
		i use <a href="https://archlinux.org/" class="text-indigo-300">Arch Linux</a>. (some times lol)
		and <a href="https://neovim.io/" class="text-emerald-300">NeoVim</a> (if i was bothered to fix my
		config, im on cursor at the moment with tab disabled lol, though that's another blog post idea)
	</p>
	<p>and i like keeping things simple, minimalistic and clean/modern.</p>
	<p>
		while no code can be clean after 6 months, the best we can do is follow the trends and whatever
		our hearts say is good.
	</p>
</Section>

<p>
	that's it from me. - ivan (hopefully i sign this commit with
	<a href="https://gnupg.org/" class="text-indigo-500">GPG</a>, so you can confirm it's me)
</p>
