use azalea_buf::McBuf;
use packet_macros::ServerboundStatusPacket;

#[derive(Clone, Debug, McBuf, ServerboundStatusPacket)]
pub struct ServerboundPingRequestPacket {
    pub time: u64,
}