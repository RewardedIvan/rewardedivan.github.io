<script lang="ts">
	import Code from '$lib/components/Code.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section title="early beginnings" id="early-beginnings">
	<p>
		as everyone should (imo), i, without knowing better, was doing the most random projects using
		just vanilla html + js + <a href="https://expressjs.com/" class="text-gray-400">Express</a> and
		the vast apis <a href="https://nodejs.org/en" class="text-green-500">Node.js</a> had to offer
	</p>
	<i class="text-sm text-gray-500">screenshot from my old "rice" on github</i>
	<img src="/blog-res/frameworks/old_ss.png" alt="old_ss" />
	<p>oh just how innocent was i</p>
	<p>
		but this continued to be my preferred way of developing for the web with my database being
		JSON.stringify + fs.writeFileSync
	</p>
	<p>
		until at some point i was informed about the so-called "<a
			href="https://react.dev/?uwu"
			class="text-cyan-400">React</a
		>."
	</p>
	<p>
		i was bound to try it at some point and actually my main reason for doing this is because i saw
		material ui, the cool ripple effect, how clean it looked and compared to my good ol' bootstrap,
		which i had picked up, because i saw it being used on a <a
			href="https://academy.hackthebox.com/"
			class="text-lime-400">Hack The Box</a
		>
		module, it was just better. i had this AI project idea in mind, (spoiler: no i didn't finish it)
		so i copied that <a href="https://vite.dev/" class="text-purple-400">Vite</a> react template and
		instantly went "whaa where the backend," with not a single idea on what vite is, neither react.
	</p>
	<p>
		apparently i made it work using <u
			><a href="https://npmjs.com/package/vite-express">vite-express</a></u
		>
		and... <u><a href="https://www.npmjs.com/package/axios">axios</a></u>? at the time i think i
		didn't understand the fetch api nor concurrency, i just used <Code>.then()</Code>.
	</p>
	<p>my clueless self sticked with his favorite express stack for future projects.</p>
</Section>

<Section title="i can't keep this up" id="panel">
	<p>
		there came a time where i wanted to make my own
		<a href="https://www.minecraft.net/en-us" class="text-green-500">Minecraft</a> server panel, mostly
		for fun and because i wanted to have my own and not use somebody else's.
	</p>
	<p class="text-sm text-gray-500">(please don't question my logic, there is none)</p>
	<p>
		oh and by that time something must have gotten into my head, because I WENT CRAZY WITH THE
		CLASSES like
	</p>
	<img src="/blog-res/frameworks/classes.png" alt="classes" />
	<p>
		i can't lie, this is much better than server rendering everything in a huge template string, but
		it's not the best and also there is ZERO server rendering, nada, everything is fetch abuse.
	</p>
	<p>and also i didn't use websockets for the console</p>
	<p>it was literally fetching an endpoint every half second</p>
	<img src="/blog-res/frameworks/polling.png" alt="polling" />
</Section>

<Section title="a better way?" id="react">
	<p>
		i'm pretty sure i was addicted to watching
		<a href="https://youtube.com/@t3dotgg" class="text-violet-600">Theo</a> yap about react and
		<a href="https://nextjs.org/" class="text-blue-400">Next.js</a>, i was semi paying attention to
		what he's saying
	</p>
	<p class="ml-4">WHATS AN EFFECT AND WHY IS IT BAD</p>
	<p>the amount of times he said "better way to do X" got me to actually give next a fair shot</p>
	<p>and going through the <u><a href="https://react.dev/learn">tutorial</a></u> made me go</p>
	<p class="ml-4">why did i not know this earlier?? this is literally everything i ever wanted</p>
	<img src="/blog-res/frameworks/mistakes_were_made.png" alt="mistakes were made" />
	<p>
		so said project underwent a 5% finished rewrite after i realized next.js middleware is
		<a
			href="https://nextjs.org/docs/14/app/building-your-application/routing/middleware#runtime"
			class="text-red-500">unsupported for nodejs runtime</a
		>, which to the day i'm writing this, still has mehh support.
	</p>
	<p>
		but at the time it just DIDNT work and there was no world in which i would put my auth code in
		layout.tsx and soooo i ended up searching for another framework..
	</p>
	<p class="text-sm text-gray-500">(again please don't question my logic, there is none)</p>
</Section>

<Section title="svelte" id="svelte">
	<p>then i discovered <a href="https://svelte.dev/" class="text-orange-600">Svelte/Kit</a></p>
	<img src="/blog-res/frameworks/trying_svelte.png" alt="trying svelte" />
	<u
		><a href="https://youtu.be/H1eEFfAkIik?t=161" class="text-sm text-gray-500"
			>taken from FireShip's video</a
		></u
	>
	<p>
		the thing i liked most about it was that it really looked like my old vanilla code, but just
		nicer, way more reusable, with SSR (can't forget the SSR) and form actions.
	</p>
	<p>
		said project is now feature-complete (sort of, i still have some ideas, but i don't work on it
		as much)
	</p>
	<p>and around that time i also wrote my site with it</p>
</Section>

<Section title="random side project" id="random-side-project">
	<p>
		i needed to make an ui for a certain project, which is a sort of video downloader for a... paid
		course platform ehem
	</p>
	<p>
		so after more <a href="https://youtube.com/@t3dotgg" class="text-violet-600">Theo</a> watching i
		decided to give next one more chance
	</p>
	<p>
		or the real reason was probably because i saw how nice
		<u><a href="https://ui.shadcn.com/">shadcn/ui</a></u> is and wanted to try it
	</p>
	<p>all was going well until it wasn't</p>
	<img src="/blog-res/frameworks/compile_times.png" alt="11 second compile times" />
	<b
		>NOTE: i was using the react compiler
		<span class="text-gray-500">i heard from Theo watching and thought i'd try it</span></b
	>
	<p>turns out next doesn't like windows, well windows sucks in general, but STILL</p>
	<p>
		the typescript LSP probably couldn't handle the node process that was sucking every single clock
		cycle out of my little processor
	</p>
	<img src="/blog-res/frameworks/video_driver.png" alt="microsoft basic display driver" />
	<p>FYI these are my laptop's specs</p>
	<img src="/blog-res/frameworks/laptop_specs.png" alt="ryzen 5800H + RTX 3050 Ti mobile" />
	<p>
		it runs way better on <a href="https://archlinux.org" class="text-cyan-500">Arch Linux</a>
	</p>
	<p>but either i didn't know that and didn't think to try it at the time</p>
	<p>so i literally crashed out on react at 3am (sob)</p>
	<p class="text-sm text-gray-500">please don't read this</p>
	<img src="/blog-res/frameworks/rant.png" alt={'"little" rant'} />
	<p class="text-sm text-gray-500">i am wrong about a multitude of things in that "rant"</p>
	<p>
		but atleast that project was sort of finished, so good job me for persevering the terror that
		was micro$oft windows
	</p>
</Section>

<Section title="imagine a framework..." id="imagine-a-framework">
	<p>i actually wanted to try my idea with compiling JSX to the traditional vanilla JS way</p>
	<u
		><a href="https://youtu.be/XAGCULPO_DE?t=3366" class="text-sm text-gray-500"
			>also i was inspired by Tsoding</a
		></u
	>
	<p>well so i did, but didn't get really far</p>
	<p>
		so when things don't work out, you consult your senior professor,
		<a href="https://chatgpt.com/" class="text-green-500">ChatGPT</a>
	</p>
	<p>
		you can find said consulting
		<u><a href="https://chatgpt.com/share/689213dc-7cbc-8010-8540-0cdf5a3ba19e">here</a></u>
	</p>
	<p>
		and i was once again reminded that everything that can be built.. is probably already built by
		someone.
	</p>
	<p>
		basically <a href="https://www.solidjs.com/" class="text-blue-300">Solid.js</a> solves all my issues
		with React
	</p>
	<ul class="ml-4 list-disc">
		<li>the fucking middleware works</li>
		<li>won't crash nvidia driver</li>
	</ul>
	<p>so far it's looking really promising even though i have zero lines of code written in it</p>
	<p>
		BUT i will be keeping my old projects as is, especially the panel, suffered enough rewrites
		(sob)
	</p>
	<p>can't wait to use it</p>
</Section>

<Section title="conclusion" id="conclusion">
	<p>
		web development sucks, we should all just use
		<a href="https://github.com/ocornut/imgui" class="text-blue-500">ImGui</a> with wasm ong
	</p>
	<p>- ivan</p>
</Section>
