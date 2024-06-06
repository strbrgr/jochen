---
title: Installing Arch on a Thinkpad T480s
eleventyExcludeFromCollections: true
tags: 
   code
---

I recently scooped up a used Thinkpad T480s for a great price on ebay. I wanted to get more into Linux and thought why not start out cheap, see if I like it and maybe get rid of my MacBook at some point? Honestly I like the build and feel of the Thinkpad a lot. It's matte black looks quiet sleek and compared to my M1 it actually feels sturdier even though it has a lot of plastic.

With my Thinkpad, I wanted to understand the thing that I use for eight hours a day a bit more. I don't know too much about Operating Systems so I thought giving Linux a try would be the smart thing to do here as Apple's ecosystem is closed source and using Windows makes me feel like `Milton` in Office Space.

### Torture yourself with Arch as your first Distro
I'm the kind of person who likes to torture himself more than necessary so of course I chose `Arch` as my first Distro. Might as well go all-in, eh? Why only half-ass it?

I started like a classic neckbeard and meticulously followed the Wiki to get my Thinkpad T480s up and running. I got into formatting, mounting partitions, selecting the right partition system, installing `grub`, and running `fstab`. You know the drill...
Honestly doing this a couple times is fun (maybe?) but why dealing with this hassle if there is better solutions out there? In the end I don't want to be bothered with things that I could automate and someone else has already figured out.

### Just run `archinstall`

Seriously, use `archinstall`. Boot into your live arch install environment, connect to your wifi (`station _STATION_ connect _SSID`), ping whatever website to make sure you are connected and alter installation settings to your likings.

I made sure to only install what I need and kept my list to a minimum:
`vim git rust nitrogen feh fish firefox bspwm sxhkd dmenu pcmanfm polybar alacritty thunar thunar-volman gvfs xorg-server xorg-xinit xorg-xrandr xorg-xsetroot xorg-xmodmap xorg-setxkbmap xf86-input-libinput xf86-video-intel bluez bluez-utils pulseaudio-bluetooth pulseaudio pulseaudio-alsa pavucontrol alsa-plugins alsa-utils`

After `sudo reboot now`, I ran the following commands to get a first simple config up and running before customizing my environment:

```sh
cd $HOME/.config/
mkdir bspwm sxhkd polybar picom dunst
cp /usr/share/doc/bspwm/examples/bspwmrc bspwm/
cp /usr/share/doc/bspwm/examples/sxhkdrc sxhkd/
cp /etc/xdg/picom.conf picom/
cp /etc/polybar/config.ini polybar/
cp /etc/dunst/dunstrc/ dunst/
cd bspwm/
```

Now that that is done, run `chmod +x bspwmrc` from within your bspwm directory. `Vim` into the file and add the following:

```sh
sxhdk &
picom --config $HOME/.config/picom/picom.conf &
nitrogen --restore &
polybar &
```

Go into your `sxhkd` directory next and edit the `sxhkdrc` file. You basically want to change key-bindings to whatever makes sense to you. Moving forward we will need to create a `.xinitrc` file in our `~/.config` folder with the following entry:

```sh
#!/bin/sh
exec bspwm
```

Then we need to make sure to autostart bspwm whenever our system boots. One way to do this is via an entry in your shell. After `fish` is installed we can confirm its existence via `cat /etc/shells` and then select it by using `chsh`. In our `~/.config/fish` folder we need to edit the `config.fish` file and add the following to start x at startup:

```sh
# Start X at login
if status is-interactive
    if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
        exec startx -- -keeptty
    end
end
```

I don't ever use `CapsLock` so I will remap it to `CTRL`. As we installed `xorg-xmodmap` we can now run `xmodmap -pke > ~/.Xmodmap` and then edit the file like so:

```sh

```



### What's next

Honestly, I'd rather invest the time saved by using `archinstall` on learning how to make daily snapshots of my system, similar to what `TimeMachine` does on my Mac. There are more things I want to get in to like getting something up and running with Ansible to make my install as convenient as possible.
