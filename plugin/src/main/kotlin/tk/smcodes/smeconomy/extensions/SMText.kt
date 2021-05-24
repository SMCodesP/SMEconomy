package tk.smcodes.smeconomy.extensions

import br.com.devsrsouza.kotlinbukkitapi.extensions.text.translateColor
import org.bukkit.Bukkit

fun String.log() = Bukkit.getConsoleSender().sendMessage(this.translateColor('&'))
