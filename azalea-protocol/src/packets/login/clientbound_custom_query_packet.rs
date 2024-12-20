use std::hash::Hash;

use azalea_buf::{McBuf, UnsizedByteArray};
use azalea_core::resource_location::ResourceLocation;
use azalea_protocol_macros::ClientboundLoginPacket;

#[derive(Hash, Clone, Debug, McBuf, ClientboundLoginPacket)]
pub struct ClientboundCustomQueryPacket {
    #[var]
    pub transaction_id: u32,
    pub identifier: ResourceLocation,
    pub data: UnsizedByteArray,
}
